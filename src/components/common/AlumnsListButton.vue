<template>
  <div>
    <RouterLink :to="{ name: 'userlist', params: { role: 0 } }">
      <button type="button" class="btn button--orange-outlined m-1">
        <h1>Alumnado</h1>
      </button>
    </RouterLink>
  </div>
</template>
<script setup></script>
>

<style scoped>
.button--orange-outlined:hover {
  color: #f8981d;
  background-color: whitesmoke;
}
</style>
