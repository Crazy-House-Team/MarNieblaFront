<script setup>
import LoginForm from "../components/forms/LoginForm.vue";
</script>

<template>
  <section class="title">
    <h1 class="title__h1">Mar de niebla te da la bienvenida</h1>
    <h2 class="title__h2">Identifícate para participar en un test</h2>
  </section>
  <LoginForm />
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}

.title__h1 {
  font-size: 4rem;
  line-height: 4.8rem;
}
</style>
