<template>
  <div>
    <RouterLink :to="{ name: 'testlist' }">
      <button type="button" class="btn button--orange-outlined m-1">
        <h1>Tests</h1>
      </button>
    </RouterLink>
  </div>
</template>
<script setup>

</script>
<style scoped>
.button--orange-outlined:hover {
  color: #f8981d;
  background-color: whitesmoke;
}
</style>
