<script setup>
import { examInClassStudent } from "../store/examInClassStudent";
import { getAction, postAction } from "@/services/apiRequests";
import { getUserId } from "@/services/auth";
import { ref, onMounted, onUnmounted, onBeforeMount } from "vue";
import router from "../router";

const store = examInClassStudent();
let questionsOrderStudent = ref(0);
let actualQuestion = ref();
let results = [];
let hits = 0;
let answered = ref(false);
let answer = ref("");
let questionsCall = "";
let activeQuestion = "";
onBeforeMount(
  async () => {
    activeQuestion = await getAction("activeQuestion/", store.exam_id);
    actualQuestion.value = activeQuestion.data[0].question_id;
  }),
  onMounted(() => {
    questionsCall = setInterval(async () => {
      let activeQuestion = await getAction("activeQuestion/", store.exam_id);
      if (actualQuestion.value != activeQuestion.data[0].question_id) {
        actualQuestion.value = activeQuestion.data[0].question_id;
        answered.value = false;
        questionsOrderStudent.value = questionsOrderStudent.value + 1;
        console.log(questionsOrderStudent.value);

        document.getElementById("answerForm").reset();
      }
    }, 2000);
  });
onUnmounted(() => {
  clearInterval(questionsCall);
});

function sendAnswer() {

  switch (answer.value) {
    case "":
      window.alert("No Has seleccionado ninguna respuesta. Intentalo");
      break;

    default:
      answered.value = true;
      
      isCorrectAnswer();
  }
}
function isCorrectAnswer() {

  let data = {
    user_id: getUserId(),
    exam_id: store.exam_id,
    question_id: actualQuestion.value,
    is_right: true,
  };

  if (
    answer.value ===
    store.questionsInTest[0].data[questionsOrderStudent.value].right_answer
  ) {
    hits = hits + 1;
    results.push(true);
  } else {
    data.is_right = false;
    results.push(false);
  }
  postAction("userAnswerInExam", data);
}

function finishExam() {
  store.finishExam(hits, results);
  router.push("/resultuser");
}
</script>
<template>
  <div class="container">
    <div>
      <label
        for="questionlabel"
        class="pregunta form-label d-flex justify-content-center"
        >PREGUNTA {{ questionsOrderStudent + 1 }}</label
      >
      <textarea
        type="question"
        class="form-control"
        id="questionlabel"
        rows="3"
        v-model="store.questionsInTest[0].data[questionsOrderStudent].question"
      ></textarea>
    </div>
    <form id="answerForm">
      <div class="respuestas mt-2">
        <div class="row">
          <div
            class="
              col-6 col-xlm-3
              mt-3
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <input
              id="answer_a"
              value="A"
              name="answer"
              type="radio"
              class="btn-check"
              v-model="answer"
              autocomplete="off"
            />
            <label
              for="answer_a"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              checked=""
              >{{
                store.questionsInTest[0].data[questionsOrderStudent].answer_a
              }}
            </label>
          </div>
          <div
            class="
              col-6 col-xlm-3
              mt-3
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <input
              id="answer_c"
              value="C"
              type="radio"
              class="btn-check"
              autocomplete="off"
              v-model="answer"
              name="answer"
            />
            <label
              for="answer_c"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrderStudent].answer_c
              }}
            </label>
          </div>
        </div>
        <div class="row">
          <div
            class="
              col-6 col-xlm-3
              mt-3
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <input
              id="answer_b"
              value="B"
              type="radio"
              v-model="answer"
              class="btn-check"
              autocomplete="off"
              name="answer"
            />
            <label
              for="answer_b"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrderStudent].answer_b
              }}
            </label>
          </div>
          <div
            class="
              col-6 col-lm-3
              mt-3
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <input
              id="answer_d"
              value="D"
              type="radio"
              v-model="answer"
              name="answer"
              class="btn-check"
              autocomplete="off"
            />
            <label
              for="answer_d"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrderStudent].answer_d
              }}
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          v-if="answered === false && questionsOrderStudent != 19"
          class="button--purple-outlined mt-5"
          @click.prevent="sendAnswer"
        >
          ENVIAR RESPUESTA
        </button>
        <button
          v-if="questionsOrderStudent === 19"
          class="button--purple-outlined mt-5"
          @click.prevent="finishExam"
        >
          TERMINAR PRUEBA
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
h2 {
  font-size: 25px;
}

.form-label {
  font-size: 20px;
  margin: 20px;
}
.pregunta {
  color: #f8981d;
  font-size: 25px;
  margin: 0;
}

textarea {
  border: 6px solid #f8981d;
  border-radius: 0px;
  height: 150px;
}

.button--purple-outlined {
  background-color: #ffffff;
  border: 6px solid #675979;
  border-radius: 20px;
  margin-left: 15%;
  height: 55px;
  width: 800px;
}

.input {
  background-color: #ffffff;
  border: 6px solid #92c954;
  border-radius: 30px;
  height: 80px;
  width: 450px;
}
</style>
