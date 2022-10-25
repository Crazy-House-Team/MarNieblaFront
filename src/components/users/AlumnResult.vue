<script setup>

  import { examInClassStudent } from "../../store/examInClassStudent";
  import { testRandom } from "../../store/testsRandom";
  import BackButton from "../common/BackButton.vue";

  let store = examInClassStudent();

  if (store.results === "") {
    store = testRandom();
  }

</script>

<template>

  <div class="testResult">
    <div class="result">
      <div v-for="(result, index) in store.results" :key="index" class="NumberQuestionLeft ">
        <span v-if="result == true"></span>
        <h2 class="m-2"> Pregunta {{ index + 1 }} : 
          <span v-if="result === true"><img src="../../../public/Images/check.png" alt="True" class="w-5"></span>
          <span v-if="result === false"><img src="../../../public/Images/uncheck.png" alt="False" class="w-5"></span>
        </h2>
      </div>
    </div>

    <div class="totalResult">
      <h1>RESULTADOS:</h1>
      <div class="resultTrue"><img src="../../../public/Images/check.png" alt="" class="fluid w-100"></div>
      <div class="resultNumberTrue text-center p-4">{{ store.hits }}</div>
      <div class="resultFalse"><img src="../../../public/Images/uncheck.png" alt="" class="fluid w-100"></div>
      <div class="resultNumberFalse text-center p-4">{{ 20 - store.hits }}</div>
    </div>

    <div class="testDay ">

      <h3>REALIZADO EL: {{ store.date }}</h3>
      <div class="resultDay">
        <div class="checkTrue">
          <h3>{{ store.hits }}</h3>
          <h3>Acertadas</h3>
        </div>

        <div class="checkFalse ">
          <h3> {{ 20 - store.hits }}</h3>
          <h3>Incorrectas</h3>
        </div>
      </div>
    </div>

  </div>
  <div>
    <BackButton toRoute="/homeuser"></BackButton>
  </div>
</template>



<style scoped>
  .testResult {
    top: 30px;
    height: 740px;
    width: 1100px;
    position: absolute;
    border: #f8981d solid 10px;
  }

  .result {
    display: flex;
    flex-direction: column;
    top: 100px;
    left: 50px;
  }

  .totalResult {
    height: 312px;
    width: 363px;
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 100px;
    top: 100px;
  }

  .totalResult h1 {
    top: 20px;
    left: 80px;
  }

  .resultTrue,
  .resultFalse,
  .resultNumberTrue,
  .resultNumberFalse {
    height: 60px;
    width: 80px;
    background-color: #fff;
    font-size: 1.6em;
  }

  .resultTrue {
    left: 50px;
    top: 60px;
  }

  .resultNumberTrue {
    left: 190px;
  }

  .resultFalse {
    left: 50px;
    top: 60px;
  }

  .resultNumberFalse {
    left: 190px;
  }

  .testDay {
    height: 115px;
    width: 340px;
    background-color: #d9d9d9;
    position: absolute;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    right: 110px;
    top: 550px;
    border: 5px solid #92c954;
    border-radius: 20px;
  }

  h3 {
    left: 30px;
  }

  .resultDay {
    height: 21px;
    width: 40px;
  }

  .checkTrue,
  .checkFalse {
    display: fleX;
    flex-direction: row;
    justify-content: space-between;

  }

  .checkTrue {
    gap: 10px;
  }

  .checkFalse {
    left: 100px;
    gap: 10px;
    bottom: 27px;
    position: relative;
    margin-left: 2vw;
  }

  .button--purple-outlined {
    position: absolute;
    right: 350px;
    bottom: 20px;
    width: 600px;
  }
</style>