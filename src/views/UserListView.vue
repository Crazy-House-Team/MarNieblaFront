<script setup>

import { onMounted, ref } from "vue";
import StudentRow from "../components/users/StudentRow.vue";
import { getAction } from "../services/apiRequests";
import BackButton from "../components/common/BackButton.vue";
import CreateUserButton from "../components/common/CreateUserButton.vue";

defineProps({
  role: String,
});

const userList = ref([]);
const numOfUsersInList = ref(0);
onMounted(async () => {
  userList.value = await getAction("users");
  numOfUsersInList.value = userList.value.data.length;
});
</script>

<template>
  <div class="wrapper">
    <div class="justify-content-around d-flex w-100 m-4">
      <CreateUserButton />
      <h1 v-if="role === '0'">Lista de estudiantes</h1>
      <h1 v-else>Lista de profesores</h1>
      <BackButton toRoute="/admin" />
    </div>
    <ul class="list-group" v-if="numOfUsersInList > 0">
      <StudentRow
        v-for="(user, index) in userList.data"
        :key="index"
        :id="user.id"
        :name="user.name"
        :username="user.name"
        :group="user.group"
        :userRole="user.isAdmin"
        :role="Number(role)"
      />
    </ul>
    <p class="p__warning" v-else>No existe ningún usuario.</p>
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
.justify-content-around{
  align-items: center;
}
.p__warning {
  margin-top: 5rem;
}

</style>
