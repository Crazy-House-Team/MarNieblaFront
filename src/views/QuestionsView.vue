<script setup>
import routes from '@/router';
import { onMounted, onUpdated, ref } from "vue";
import { getAction } from "../services/apiRequests";
import SelectCompetencies from "../components/common/selectCompetencies.vue";
import BackButton from "../components/common/BackButton.vue";
import QuestionsList from "../components/questions/QuestionsList.vue";
import NewQuestion from "../components/common/NewQuestion.vue";

const questionsListData = ref([]);
let numOfQuestionsInList = ref(0);

onMounted(async () => {
  questionsListData.value = await getAction("questions");
  numOfQuestionsInList.value = questionsListData.value.data.length;
});


</script>

<template>
  
  <div class="wrapper">
    <h1>Gestión de preguntas</h1>

    <div class="justify-content-around d-flex w-100 m-4">
      <NewQuestion />
      <SelectCompetencies />
      <button type="button" class="button-back" @click="routes.push({path:'/admin'})" >Volver</button>
    </div>

    <ul class="list-group" v-if="numOfQuestionsInList > 0">
      <QuestionsList
        v-for="(question, index) in questionsListData.data"
        :key="index"
        :question="question.question"
        :id="question.id"
      />
    </ul>

    <p class="p__warning" v-else>No existe ningúna pregunta.</p>
  </div>

</template>

<style scoped>
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ul {
    width: 100%;
  }
  .p__warning {
    margin-top: 5rem;
  }

</style>
