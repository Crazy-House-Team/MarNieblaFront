<script setup>
import TestsListButton from '../components/common/TestsListButton.vue';
import TeachersListButton from '../components/common/TeachersListButton.vue';
import QuestionsListButton from '../components/common/QuestionsListButton.vue';
import AlumnsListButton from '../components/common/AlumnsListButton.vue';</script>

<template>
  <section class="id_form flex-column d-flex justify-content-between">
    <AlumnsListButton></AlumnsListButton>
    <TeachersListButton></TeachersListButton>
    <TestsListButton></TestsListButton>
    <QuestionsListButton></QuestionsListButton>
  </section>
</template>

<style scoped>
  section{
  height: 80vh;
  }
</style>
