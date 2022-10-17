<script setup>
import { examInClassStudent } from "../../store/examInClassStudent";
let store = examInClassStudent();
</script>

<template>
  <div class="testResult">
    <div class="result">
      <div
        v-for="(result, index) in store.results"
        :key="index"
        class="NumberQuestionLeft"
      >
        Pregunta {{ index }} : {{ result }}
      </div>
    </div>

    <div class="totalResult">
      <h1>RESULTADOS:</h1>

      <div class="resultTrue"></div>
      <div class="resultNumberTrue">{{store.hits}}</div>
      <div class="resultFalse"></div>
      <div class="resultNumberFalse">{{20 - store.hits}}</div>
    </div>
    <div class="testDay">
      <h3>TITULO DEL TEST</h3>
      <h3>REALIZADO EL:</h3>
      <div class="resultDay">
        <div class="checkTrue">
          <h3>{{store.hits}}</h3>
          <h3>true</h3>
        </div>

        <div class="checkFalse">
          <h3>{{20 - store.hits}}</h3>
          <h3>false</h3>
        </div>
      </div>
    </div>
  </div>
  <button type="submit" class="button--purple-outlined">TERMINAR PRUEBA</button>
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
  justify-content: center;
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
}
.checkTrue {
  gap: 10px;
}
.checkFalse {
  left: 100px;
  gap: 10px;
  bottom: 27px;
  position: relative;
}
.button--purple-outlined {
  position: absolute;
  right: 350px;
  bottom: 20px;
  width: 600px;
}
</style>