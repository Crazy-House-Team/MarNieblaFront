<script>
import { mapActions, mapState } from "pinia";
import { testRandom } from "../store/testsRandom";
import router from "../router";
export default {
  data: () => ({
    questionsOrder: 0,
    rightAnswer: "",
    hits: 0,
    correctAnswerA: false,
    correctAnswerB: false,
    correctAnswerC: false,
    correctAnswerD: false,
    results: [],
  }),

  computed: {
    ...mapState(testRandom, ["questionsInTestRandom"]),
  },
  methods: {
    ...mapActions(testRandom, ["finishExam"]),

    sendAnswer() {
      switch (this.rightAnswer) {
        case "":
          window.alert("No Has seleccionado ninguna respuesta. Intentalo");
          break;

        default:
          console.log(this.rightAnswer);
          console.log(this.questionsInTestRandom[0].data[this.questionsOrder].right_answer);
          this.isCorrectAnswer();
          this.markCorrectAnswer();
          setTimeout(this.nextQuestion, 2000);
          console.log(this.results);
          console.log(this.hits);
      }
    },
    isCorrectAnswer() {
      if (
        this.rightAnswer ===
        this.questionsInTestRandom[0].data[this.questionsOrder].right_answer
      ) {
        this.hits = this.hits + 1;
        this.results.push(true);
        return;
      }
      this.results.push(false);
    },
    markCorrectAnswer() {
      const markClass =
        this.questionsInTestRandom[0].data[this.questionsOrder].right_answer;
      switch (markClass) {
        case "A":
          this.correctAnswerA = true;
          break;
        case "B":
          this.correctAnswerB = true;
          break;
        case "C":
          this.correctAnswerC = true;
          break;
        case "D":
          this.correctAnswerD = true;
          break;
      }
    },
    nextQuestion() {
      if (this.questionsOrder === 5) {
        router.push("/resultuser");
        this.finishExam(this.hits, this.results); 
        return;      
      }
      this.correctAnswerA = false;
      this.correctAnswerB = false;
      this.correctAnswerC = false;
      this.correctAnswerD = false;
      this.rightAnswer = "";
      this.questionsOrder += 1;
      document.getElementById("answerForm").reset();
    },
  
  },
};
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
          v-model="questionsInTestRandom[0].data[this.questionsOrder].question"
        ></textarea>
      </div>

      <div class="respuestas mt-2">
        <div class="row">
          <div
            class="col-6 col-xlm-3 mt-3 d-flex justify-content-center align-items-center"
          >
            <input
              id="answer_a"
              value="A"
              name="rightAnswer"
              type="radio"
              class="btn-check"
              v-model="rightAnswer"
              autocomplete="off"
            />
            <label
              for="answer_a"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              :class="{ 'bg-success': correctAnswerA }"
              >{{ questionsInTestRandom[0].data[this.questionsOrder].answer_a }}
            </label>
          </div>
          <div
            class="col-6 col-xlm-3 mt-3 d-flex justify-content-center align-items-center"
          >
            <input
              id="answer_c"
              value="C"
              type="radio"
              class="btn-check"
              autocomplete="off"
              v-model="rightAnswer"
              name="rightAnswer"
            />
            <label
              for="answer_c"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              :class="{ 'bg-success': correctAnswerC }"
              >{{ questionsInTestRandom[0].data[this.questionsOrder].answer_c }}
            </label>
          </div>
        </div>
        <div class="row">
          <div
            class="col-6 col-xlm-3 mt-3 d-flex justify-content-center align-items-center"
          >
            <input
              id="answer_b"
              value="B"
              type="radio"
              v-model="rightAnswer"
              class="btn-check"
              autocomplete="off"
              name="rightAnswer"
            />
            <label
              for="answer_b"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              :class="{ 'bg-success': correctAnswerB }"
              >{{ questionsInTestRandom[0].data[this.questionsOrder].answer_b }}
            </label>
          </div>
          <div
            class="col-6 col-lm-3 mt-3 d-flex justify-content-center align-items-center"
          >
            <input
              id="answer_d"
              value="D"
              type="radio"
              v-model="rightAnswer"
              name="rightAnswer"
              class="btn-check"
              autocomplete="off"
            />
            <label
              for="answer_d"
              :class="{ 'bg-success': correctAnswerD }"
              class="form-label input mt-3 ms-4 form-control text-center btn"
              >{{ questionsInTestRandom[0].data[this.questionsOrder].answer_d }}
            </label>
          </div>
        </div>
      </div>
    </form>
    <div class="button-box">
      <button
        v-if="this.questionsOrder != 5"
        class="button--purple-outlined"
        @click="sendAnswer()"
      >
        ENVIAR RESPUESTA
      </button>
      <button
        v-if="this.questionsOrder === 5"
        class="button--purple-outlined mt-5"
        @click.prevent="sendAnswer"
      >
        TERMINAR PRUEBA
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
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
.form-control {
  font-size: 20px;
}
.button-box {
  display: flex;
  justify-content: center;
}
.button--purple-outlined {
  align-items: center;
  height: 55px;
  width: 400px;
  font-size: 3rem;
}
@media (max-width: 1000px) {
  .button--purple-outlined {
    align-items: center;
    height: 55px;
    width: 400px;
  }
}
@media (max-width: 780px) {
  .button--purple-outlined {
    background-color: #ffffff;
    border: 6px solid #675979;
    border-radius: 20px;
    height: 55px;
    width: 300px;
    font-size: 2.2rem;
    font-weight: bold;
  }
}
.input {
  background-color: #ffffff;
  border: 6px solid #92c954;
  border-radius: 30px;
  height: 80px;
  width: 450px;
}
</style>
