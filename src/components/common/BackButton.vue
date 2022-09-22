<template>
  <div>
    <button @click="back" class="button-back">
      <h2>Volver</h2>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>
<style>
.button-back:hover{
    color:#f8981d;
background-color: white;        }
.button-back{
  background-color: #f8981d;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  border: none;
  color: white;
}
</style>
