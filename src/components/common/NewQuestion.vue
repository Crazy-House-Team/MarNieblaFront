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
    width: 200px;
    height: 65px;
    border: none;
    color: white;
  }
  h2{
    font-size: 2.2rem;
    font-weight:bold;
  }
@media(max-width:850px){
  .button-newquestion{
      width: 150px;
      height: 70px;
   
  }
}
</style>
