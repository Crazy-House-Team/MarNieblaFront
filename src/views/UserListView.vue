<script setup>
import { onMounted, ref } from "vue";
import StudentRow from "../components/StudentRow.vue";
import { getAll } from "../services/apiRequests";

const userList = ref([]);
onMounted( async () => {
  userList.value = await getAll();
}) 
</script>

<template>
  <div class="wrapper">
    <h1>Lista de estudiantes</h1>
    <ul class="list-group">
      <StudentRow />
    </ul>
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
</style>
