<script setup>
import { testQuestions } from "../store/examInClass";
import { putAction } from "@/services/apiRequests";
import { onMounted } from "vue";
const store = testQuestions();
let questionid = 0;
const questionsOrder = 2;
onMounted(function () {
  return questionid = store.questionsInTest[0].data[questionsOrder].id;
});


function activateQuestion() {let form = {
  exam_id: store.exam_id,
  question_id: questionid,
};
console.log(form);
  putAction("activateQuestion", form.exam_id, form);
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
          >TEST 1 - PREGUNTA 1</label
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
        <output
          type="students"
          class="studentslist form-control"
          id="studentslabel"
          rows="3"
        ></output>
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
        <button class="button--purple-outlined mt-5">SIGUIENTE PREGUNTA</button>
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
