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
@media(max-width:700px){
  .button-back{
    width: 15vw;
    height: 6vh;
  }
}
@media(max-width:500px){
  .button-back{
    width: 19vw;
    height: 6vh;
  }
}
</style>
