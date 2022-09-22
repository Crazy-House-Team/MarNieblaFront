<script setup>
import EditIcon from "../icons/EditIcon.vue";
import DeleteIcon from "../icons/DeleteIcon.vue";
import { defineProps } from "vue";
defineProps({
  username: String,
});
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{ username }}
    <span class="badge">
      <DeleteIcon />
      <EditIcon />
    </span>
  </li>
</template>

<style scoped>
li {
  width: 100%;
  border: 0.2rem solid #92c954;
}
</style>
