<script setup>
  import BackButton from "../components/common/BackButton.vue";
  import CreateTestButton from "../components/common/CreateTestButton.vue";
  import TestRow from "../components/users/forms/TestRow.vue";

  import { onMounted, onUpdated, ref } from "vue";
  import { getAction } from "../services/apiRequests";
  import SelectCompetencies from "../components/common/selectCompetencies.vue";
  import QuestionsList from "../components/questions/QuestionsList.vue";
  import NewQuestion from "../components/common/NewQuestion.vue";

const testListData = ref([]);
let numOfTestInList = ref(0);

onMounted(async () => {
  testListData.value = await getAction("test");
  numOfTestInList.value = testListData.value.data.length;
});

</script>

<template>
   <h1>Gestión de Test</h1> 
    <div class="justify-content-between d-flex w-100 m-4">
      <CreateTestButton/>
      <BackButton :toRoute="'/admin'" />
    </div>
    <ul class="list-group-item d-flex justify-content-between align-items-center">
      <TestRow />
    </ul>
</template>

<style scope>
  h1 {
    text-align: center;
    margin-top: 1%;
  }
  ul {
    width: 100%;
    margin-top: 1%;
  }
</style>