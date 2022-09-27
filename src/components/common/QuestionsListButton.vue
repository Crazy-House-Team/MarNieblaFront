<template>
  <div>
    <RouterLink :to="{ name: 'questions' }">
      <button type="button" class="btn button--orange-outlined m-1">
        <h1>Preguntas</h1>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>
.button--orange-outlined:hover {
  color: #f8981d;
  background-color: whitesmoke;
}
</style>
