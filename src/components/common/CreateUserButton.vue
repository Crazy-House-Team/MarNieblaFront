<template>
  <div>
    <RouterLink :to="{ name: 'createuser' }">
      <button class="button-newuser">
        <h3>Crear Usuario</h3>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style scoped>

.button-newuser h3{
  font-size: 2rem;
  font-weight:bold;
}

.button-newuser:hover {
  background-color: white;
  color: #92c954;
  
}
@media(max-width:700px){
  .button-newuser{
    width: 150px;
    height: 65px;
  }
}
@media(max-width:500px){
  .button-newuser{
    width: 120px;
    height: 65px;
  }
}
</style>
