<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
   
    <nav class="nav">
      <div class="logo-title">
    
      <RouterLink :to="{ name: 'home' }">
        <img
          src="@/assets/Iconcolors.jpg"
          alt="logotipo"
          class="header__logo"
        />
      </RouterLink>
      <h1>Mar de Dudas</h1>
      </div>
      <RouterLink class="logout" to="/">Logout</RouterLink>
    </nav>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  width: 100vw;
  height: 8.8rem;
  background-color: black;
  display: flex;
  justify-content: center;
}
.header__logo {
  height: 6.8rem;
}
.nav {
  width: 1280px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
}
.main {
  padding: 2rem;
  width: 1280px;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color:white;
  display:flex;
  align-items: center;
  justify-content: espace-around;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 4rem;
}
.logo-title{
  display:flex;
  justify-content: space-around;
}
.logout {
display: flex;
align-items: center;
font-size:2rem;
margin-right: 2rem;
}
</style>
