<script setup>
import { examInClassStudent } from "../store/examInClassStudent";
const store = examInClassStudent();
let questionsOrder = 0;
beforeMount() {
    
}
/* function sendAnswer() {

};
function updateActiveQuestion{};
setInterval('updateActiveQuestion()',2000); */
</script>
<template>
  <div class="container">
    <form id="answerForm">
      <div>
        <label
          for="questionlabel"
          class="pregunta form-label d-flex justify-content-center"
          >PREGUNTA {{ questionsOrder + 1 }}</label
        >
        <textarea
          type="question"
          class="form-control"
          id="questionlabel"
          rows="3"
          v-model="store.questionsInTest[0].data[questionsOrder].question"
        ></textarea>
      </div>

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
              value="a"
              name="rightAnswer"
              type="radio"
              class="btn-check"
              v-model="rightAnswer"
              autocomplete="off"
            />
            <label
              for="answer_a"
              class="form-label input mt-3 ms-4 form-control text-center btn"
             
              >{{
                store.questionsInTest[0].data[questionsOrder].answer_a
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
              value="c"
              type="radio"
              class="btn-check"
              autocomplete="off"
              v-model="rightAnswer"
              name="rightAnswer"
            />
            <label
              for="answer_c"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrder].answer_c
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
              value="b"
              type="radio"
              v-model="rightAnswer"
              class="btn-check"
              autocomplete="off"
              name="rightAnswer"
            />
            <label
              for="answer_b"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrder].answer_b
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
              value="d"
              type="radio"
              v-model="rightAnswer"
              name="rightAnswer"
              class="btn-check"
              autocomplete="off"
            />
            <label
              for="answer_d"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{
                store.questionsInTest[0].data[questionsOrder].answer_d
              }}
            </label>
          </div>
        </div>
      </div>
    </form>
    <div>
      <button class="button--purple-outlined mt-5" @click="sendAnswer()">
        ENVIAR RESPUESTA
      </button>
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
  