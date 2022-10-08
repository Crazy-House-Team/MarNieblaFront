<template>
  <div>
    <RouterLink :to="{ name: 'newtest' }">
      <button class="button-createtest">
        <h2>Crear Test</h2>
      </button>
    </RouterLink>
  </div>
</template>
<script setup>

</script>
<style scoped>
.button-createtest {
  background-color: #92c954;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  border: none;
  color: white;
}

.button-createtest:hover {
  background-color: white;
  color: #92c954;
}
</style>
