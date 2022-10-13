<script setup>

  import BackButton from "../components/common/BackButton.vue";
  import CreateTestButton from "../components/common/CreateTestButton.vue";
  import TestRow from "../components/users/forms/TestRow.vue";
  import { onMounted, onUpdated, ref } from "vue";
  import { getAction } from "../services/apiRequests";
 
const examslist = ref([]);
let numOfExamInList = ref(0);

onMounted(async () => {
  examslist.value = await getAction("showExams");
  numOfExamInList.value = examslist.value.data.length;
});

</script>

<template>

   <h1>Gestión de Test</h1> 
    <div class="justify-content-between d-flex w-100 m-4 ">
      <CreateTestButton class="ms-5"/>
      <BackButton :toRoute="'/admin'" class="me-5" />
    </div>
    <ul v-if="numOfExamInList > 0" class="list-group"> 
      <TestRow 
        v-for="(exam, index) in examslist.data"
        :key="index"
        :id="exam.id"
        :name="exam.name"
      />
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