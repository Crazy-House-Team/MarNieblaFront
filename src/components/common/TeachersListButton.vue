<template>
  <div>
    <RouterLink :to="{ name: 'userlist', params: { role: 0 } }">
      <button type="button" class="btn button--orange-outlined">
        <h1>Docentes</h1>
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
