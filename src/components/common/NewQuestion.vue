<template>
  <div>
    <RouterLink :to="{ name: 'newquestion' }">
      <button
        type="button"
        class="btn text-white button-newquestion text-center"
      >
        <h3>Nueva pregunta</h3>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>
.button-newquestion {
  background-color: #92c954;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  border: none;
  color: white;
}
.button-newquestion:hover {
  background-color: white;
  color: green;
}
</style>
