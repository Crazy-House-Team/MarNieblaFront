<template>
  <div>
    <RouterLink :to="{ name: 'testlist', params: { role: 1 } }">
      <button type="button" class="btn button--orange-outlined m-1">
        <h1>Tests</h1>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>
.button--orange-outlined:hover {
  color: #f8981d;
  background-color: whitesmoke;
}
</style>
