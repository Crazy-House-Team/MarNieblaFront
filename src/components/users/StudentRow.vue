<script setup>
import EditButton from "../common/EditButton.vue";
import { defineProps } from "vue";
import DeleteButton from "../common/DeleteButton.vue";
defineProps({
  username: String,
});
</script>

<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    {{ username }}
    <span class="badge d-flex">
      <EditButton></EditButton>
      <DeleteButton></DeleteButton>
    </span>
  </li>
</template>

<style scoped>
li {
  width: 100%;
  border: 0.2rem solid #92c954;
}
</style>