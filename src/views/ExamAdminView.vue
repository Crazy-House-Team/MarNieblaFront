<script setup>
import { testQuestions } from "../store/examInClass";
import { putAction, deleteAction } from "@/services/apiRequests";
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
import router from "../router";
import { getAction } from "../services/apiRequests";
import { alumnsInTest } from "../store/alums.js";

const store = testQuestions();
const usersResponses = ref("");
let questionid = ref();
let questionsOrder = ref(0);
let activated = ref(false);
let usersCall = "";
let alumnsStore = alumnsInTest();
onUpdated(function () {
  questionid.value = store.questionsInTest[0].data[questionsOrder.value].id;
});

onMounted(() => {
  questionid.value = store.questionsInTest[0].data[questionsOrder.value].id;

  let form = {
    exam_id: store.exam_id,
    question_id: questionid.value,
  };

  putAction("activateQuestion", form.exam_id, form);
  alumnsStore.alumnsInClass();
  questionid.value = store.questionsInTest[0].data[questionsOrder.value].id;
  usersCall = setInterval(async () => {
    usersResponses.value = await getAction(
      "userAnswerInExam/",
      store.exam_id + "/" + questionid.value 
    );
    console.log(usersResponses.value);
  }, 2000);
});
onUnmounted(async () => {
  clearInterval(usersCall);
  const data = {
    status: 0,
  };
  await putAction("updateExam", store.exam_id, data);
  await deleteAction("deleteExamClass", store.exam_id);
  await deleteAction("deleteAnswers", store.exam_id);
});
function activateQuestion() {
  let form = {
    exam_id: store.exam_id,
    question_id: questionid.value,
  };
  activated.value = false;
  putAction("activateQuestion", form.exam_id, form);
}
async function nextQuestion() {
  if (questionsOrder.value == 5) {
    router.push("/admin");
    const data = {
      status: 0,
    };
    await putAction("updateExam", store.exam_id, data);
    await deleteAction("deleteExamClass", store.exam_id);
    await deleteAction("deleteAnswers", store.exam_id);
  }
  activated.value = !activated.value;
  return (questionsOrder.value = questionsOrder.value + 1);
}
</script>
<template>
  <div class="container">
    <!-- <div class="row justify-content-end"> -->
    <div class="row justify-content-start">
      <div class="col-8">
        <label
          for="questionlabel"
          class="pregunta form-label d-flex justify-content-center"
          >TEST {{ store.exam_id }} - PREGUNTA {{ questionsOrder + 1 }}</label
        >
        <textarea
          type="question"
          class="form-control text-center"
          id="questionlabel"
          rows="3"
          v-model="store.questionsInTest[0].data[questionsOrder].question"
        ></textarea>
      </div>

      <div class="col-4">
        <h3>ALUMNOS CONECTADOS</h3>
        <ul
          type="students"
          class="studentslist form-control"
          id="studentslabel"
          rows="3"
        >
          <li v-for="(student, index) in usersResponses.data" :key="index">
            <div
              v-for="(alumn, index) in alumnsStore.alumns[0].data"
              :key="index"
            >
              <span
                v-if="
                  student.question_id ===
                  store.questionsInTest[0].data[questionsOrder].id
                "
              >
                <div v-if="student.user_id === alumn.id">
                  {{ alumn.name }}
                  <img
                    v-if="student.is_right === 1"
                    src="../../public/images/check.png"
                    class="img-fluid w-25 float-right"
                  />
                  <img
                    v-if="student.is_right === 0"
                    src="../../public/images/uncheck.png"
                    class="img-fluid w-25 float-right"
                  />
                </div>
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div class="respuestas mt-2">
        <div class="row">
          <div
            class="
              col-4 col-lm-3
              mt-4
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <label for="answer_A" class="form-label"></label>
            <input
              class="form-control mt-4 me-3 text-center"
              id="answer_A"
              placeholder="A"
              v-model="store.questionsInTest[0].data[questionsOrder].answer_a"
              :class="{
                'bg-success':
                  store.questionsInTest[0].data[questionsOrder].right_answer ===
                  'A',
              }"
            />
          </div>

          <div
            class="
              col-4 col-lm-3
              mt-4
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <label for="answer_C" class="form-label"></label>
            <input
              class="form-control mt-4 me-3 text-center"
              id="answer_C"
              placeholder="C"
              v-model="store.questionsInTest[0].data[questionsOrder].answer_c"
              :class="{
                'bg-success':
                  store.questionsInTest[0].data[questionsOrder].right_answer ===
                  'C',
              }"
            />
          </div>
        </div>

        <div class="row">
          <div
            class="
              col-4 col-lm-3
              mt-4
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <label for="answer_B" class="form-label"></label>
            <input
              class="form-control mt-4 me-3 text-center"
              id="answer_B"
              placeholder="B"
              v-model="store.questionsInTest[0].data[questionsOrder].answer_b"
              :class="{
                'bg-success':
                  store.questionsInTest[0].data[questionsOrder].right_answer ===
                  'B',
              }"
            />
          </div>

          <div
            class="
              col-4 col-lm-3
              mt-4
              d-flex
              justify-content-start
              align-items-center
            "
          >
            <label for="answer_D" class="form-label"></label>
            <input
              class="form-control mt-4 me-3 text-center"
              id="answer_D"
              placeholder="D"
              v-model="store.questionsInTest[0].data[questionsOrder].answer_d"
              :class="{
                'bg-success':
                  store.questionsInTest[0].data[questionsOrder].right_answer ===
                  'D',
              }"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->

    <div class="row">
      <div
        class="
          col-6 col-lm-3
          mt-4
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <button
          v-if="activated === true"
          class="button--purple-outlined mt-5"
          @click.prevent="activateQuestion()"
        >
          ACTIVAR PREGUNTA
        </button>
      </div>
      <div
        class="
          col-6 col-lm-3
          mt-4
          d-flex
          justify-content-center
          align-items-center
        "
      >
        <button
          v-if="activated === false"
          class="button--purple-outlined mt-5"
          @click.prevent="nextQuestion"
        >
          SIGUIENTE PREGUNTA
        </button>
      </div>
    </div>
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
  font-size: 100%;
  margin: 0;
}

.question {
  border: 6px solid #f8981d;
  border-radius: 0px;
  height: 90%;
  width: 100%;
}
.studentslist {
  border: 3px solid #52504d;
  border-radius: 0%;
  height: 300%;
  width: 100%;
  margin-right: 10%;
  list-style: none;
}
h3 {
  text-align: center;
}

.button--purple-outlined {
  background-color: #ffffff;
  border: 6px solid #675979;
  border-radius: 2rem;
  height: 80%;
  width: 100%;
}

input {
  background-color: #ffffff;
  border: 6px solid #92c954;
  border-radius: 3rem;
  height: 80px;
  width: 400px;
}
</style>
