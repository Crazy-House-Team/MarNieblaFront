<script setup>
import EditUser from "../components/users/forms/EditUser.vue";
defineProps({
  id: String,
});
</script>
<template>
  <div>
    <h1 class="m-3">EDITAR USUARIO</h1>
    <EditUser :id="id" />
  </div>
</template>

<style scoped>
h1{
  text-align: center;
}
</style>
g