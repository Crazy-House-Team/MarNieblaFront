<template>
  <div>
    <RouterLink :to="{ name: 'userlist' }">
      <button class="button-newuser">
        <h2>Crear Usuario</h2>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>
.button-newuser {
  background-color: #92c954;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  border: none;
  color: white;
}

.button-newuser:hover {
  background-color: white;
  color: #92c954;
}
</style>
