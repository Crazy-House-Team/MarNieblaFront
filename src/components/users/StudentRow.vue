<script setup>
import EditButton from "../common/EditButton.vue";
import { defineProps } from "vue";
import DeleteButton from "../common/DeleteButton.vue";

defineProps({
  id: Number,
  username: String,
  group: String,
  userRole: Number,
  role: Number,
  
});
</script>

<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    v-if="userRole === role"
  >
    {{ username }} - Grupo : {{ group }}
    <span class="badge d-flex">
      <EditButton :id="id" />
      <DeleteButton :id="id" />
    </span>
  </li>
</template>

<style scoped>
li {
  width: 100%;
  border: 0.2rem solid #92c954;
}
</style>
