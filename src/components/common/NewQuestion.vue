<script>

</script>

<template>

  <div>
    <RouterLink :to="{ name: 'newquestion' }">
      <button type="button" class="button-newquestion">
        <h2>Nueva pregunta</h2>
      </button>
    </RouterLink>
  </div>

</template>


<style scoped>
  .button-newquestion:hover {
    background-color: white;
    color: green;
  }
  .button-newquestion {
    background-color: #92c954;
    border-radius: 20px;
    width: 14vw;
    height: 6vh;
    border: none;
    color: white;
  }

</style>
