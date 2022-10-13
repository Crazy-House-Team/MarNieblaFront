<script>
import { mapActions, mapState } from "pinia";
import { examInClassStudent } from "../../store/examInClassStudent";
import { testRandom } from "../../store/testsRandom";
export default {
  data(){
    id: Number
  },

  computed: {
    ...mapState(testRandom, ["questionsInTestRandom"]),
    ...mapState(examInClassStudent, ["questionsTest"]),
  },
  methods: {
    ...mapActions(testRandom, ["testRandomCreate"]),
    ...mapActions(examInClassStudent, ["testInClass"]),
  },
};
</script>
<template>
  <div class="connect">
    <h1>PUEDES UNIRTE A UNA PRUEBA COLECTIVA, CON LA ID. DE SESION</h1>
    <div class="sesion">
      <h1>ID.Sesion</h1>
      <form @submit.prevent="testInClass(id)">
        <input class="number" v-model="id" name="id" />
        <button type="submit" class="connection button--green-outlined">
          Conectar
        </button>
      </form>
    </div>
  </div>
  <div class="test">
    <div>
      <h1>PUEDES REALIZAR LA PRUEBA DE FORMA INDIVIDUAL</h1>
      <button
        class="statistics button--green-outlined"
        @click.prevent="testRandomCreate"
      >
        HACER TEST
      </button>
    </div>
  </div>
  <div class="progress">
    <div>
      <h1>EVALUA TUS AVANCES</h1>
      <button class="statistics button--green-outlined">
        VER RESULTADOS ANTERIORES
      </button>
    </div>
  </div>
</template>

<style scoped>
.connect {
  background-color: #ffffff;
  border: 6px solid #f8981d;
  height: 284px;
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 60px;
  padding-top: 50px;
  margin-top: 30px;
}
.sesion {
  display: flex;
  margin-top: 50px;
}
h1 {
  margin-top: 15px;
}
.number {
  height: 49px;
  width: 233px;
  background-color: #d9d9d9b3;
  margin-left: 50px;
  margin-top: 10px;
  border: 3px solid #92c954;
}
.connection {
  font-size: 20px;
  margin-left: 100px;
}
.test {
  height: 394px;
  width: 500px;
  background-color: #ffffff;
  border: 6px solid #f8981d;
  position: absolute;
  top: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.progress {
  height: 394px;
  width: 500px;
  background-color: #ffffff;
  border: 6px solid #f8981d;
  position: absolute;
  left: 700px;
  top: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.statistics {
  height: 100px;
  width: 400px;
  font-size: 20px;
  margin-top: 55px;
}
</style>
