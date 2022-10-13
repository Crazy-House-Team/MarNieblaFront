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
  width: 700px;
  background-color: #ffffff;
  border: 6px solid #f8981d;
  position: absolute;
  top: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  left:250px;
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


@media (max-width: 1000px){
  .connect{ 
    width: 900px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
  }
  h1 {
    font-size: 2rem;
  }

  .test {
   height: 250px;
   width: 400px;
  }
  .button--green-outlined{
   height: 50px;
   width: 300px;
  }

  .progress {
    height: 250px;
    width: 400px;
    left: 500px;
  }
  .statistics {
    font-size: 1.5rem;
  }
}

@media (max-width:880px){
  .connect{ 
    width: 650px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 25px;
    height: 270px;
  }
  h1 {
    font-size: 1.75rem;
  }

  .test {
   height: 250px;
   width: 300px;
  }
  .button--green-outlined{
   height: 50px;
   width: 250px;
  }
  .progress {
    height: 250px;
    width: 300px;
    left: 350px;
  }
  .statistics {
    font-size: 1.25rem;
  }
  .connection {
    font-size: 1.75rem;
    margin-left: 15px;
  }
  .number {
    height: 49px;
    width: 200px;
    margin-left: 30px;
    margin-right: 10px;
    margin-top: 1px;
  
  }
}

@media(max-width: 650px){
.connect{ 
    width: 430px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 25px;
    height: 270px;
  }
  h1 {
    font-size: 1.25rem;
    margin-top: 10px;
  }
  .test {
   height: 200px;
   width: 200px;
  }
  .button--green-outlined{
   height: 50px;
   width: 170px;
  }
  .progress {
    height: 200px;
    width: 200px;
    left: 230px;
  }
  .statistics {
    font-size: 1rem;
  }
  .connection {
    font-size: 1.50rem;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .number {
    height: 40px;
    width: 220px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 1px;
  }
  .sesion {
   display: flex;
   flex-direction: column;
   align-items:  center;
   margin-top: 15px;
 }
}

@media(max-width: 390px){
.connect{ 
    width: 30px;
    padding-left: 10px;
    padding-right: 5px;
    padding-top: 25px;
    height: 200px;
  }
  h1 {
    font-size: 1.25rem;
    margin-top: 10px;
  }
  .test {
   height: 200px;
   width: 200px;
  }
  .button--green-outlined{
   height: 50px;
   width: 170px;
  }
  .progress {
    height: 200px;
    width: 200px;
    left: 230px;
  }
  .statistics {
    font-size: 1rem;
  }
  .connection {
    font-size: 1.50rem;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .number {
    height: 40px;
    width: 220px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 1px;
  }
  .sesion {
   display: flex;
   flex-direction: column;
   align-items:  center;
   margin-top: 15px;
 }
}




</style>
