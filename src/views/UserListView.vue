<script setup>
import { onMounted, ref } from "vue";
import StudentRow from "../components/users/StudentRow.vue";
import { getAction, printUrl } from "../services/apiRequests";
import BackButton from "../components/common/BackButton.vue";
import CreateUserButton from "../components/common/CreateUserButton.vue";

defineProps({
  role: String,
})
const userList = ref([]);
onMounted(async () => {
  printUrl();
  userList.value = await getAction("users");
});
</script>

<template>
  <div class="wrapper">
    <div class="justify-content-around d-flex w-100 m-4">
      <CreateUserButton></CreateUserButton>
    <h1>Lista de estudiantes</h1>
    <BackButton></BackButton>
  </div>
    <ul class="list-group">
      <StudentRow
        v-for="(user, index) in userList.data"
        :key="index"
        :username="user.name"
      />
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
