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

.button-newuser h3{
  font-size: 3rem;
  font-weight:bold;
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
