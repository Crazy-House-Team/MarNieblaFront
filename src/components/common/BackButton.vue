<script>

export default {
    methods: {
      back() {
        this.$router.go(-1);
      },
    },
  };

</script>

<template>

<div>
  <button @click="back" class="button-back">
    <h2>Volver</h2>
  </button>
 </div>

</template>

<style scoped>

  .button-back:hover{
    background-color: white;
    color:#f8981d;
  }

  .button-back{
    background-color: #f8981d;
    border-radius: 20px;
    width: 14vw;
    height: 6vh;
    border: none;
    color: white;
  }

</style>
