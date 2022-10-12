<script setup>
// For use de button:
// <BackButton toRoute = "/Here/the/route" />

defineProps({
  toRoute: String,
});

</script>

<template>

  <RouterLink :to="{ path: toRoute}">
    <button type="button"
          class="button-back">
          <h3>Volver</h3>
        </button>
  </RouterLink>

</template>

<style scoped>
.button-back h3{
  font-size: 3rem;
  font-weight:bold;
 
}
@media(max-width:1000px){
  .button-back{
    left: 20px;
  }
}
@media(max-width:700px){
  .button-back{
    width: 25vw;
    height: 6vh;
  }
}
@media(max-width:575px){
  .button-back{
    width: 25vw;
    height: 6vh;
  }
}
@media(max-width:425px){
  .button-back{
    width:30vw;
    height: 6vh;
  }
}
</style>
