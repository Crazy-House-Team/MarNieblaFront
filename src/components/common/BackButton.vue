<script setup>
// For use de button:
// <BackButton toRoute = "Here the route" />

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
</style>
