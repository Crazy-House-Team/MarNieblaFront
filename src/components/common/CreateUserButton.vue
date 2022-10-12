<template>
  <div>
    <RouterLink :to="{ name: 'createuser' }">
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
@media(max-width:700px){
  .button-newuser{
    width: 15vw;
    height: 6vh;
  }
}
@media(max-width:500px){
  .button-newuser{
    width: 19vw;
    height: 6vh;
  }
}
</style>
