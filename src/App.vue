<script setup>
import router from "@/router";
import { RouterLink, RouterView } from "vue-router";
import {
  checkIfUserIsLoggedIn,
  removeAuthRole,
  removeAuthToken,
  removeUserId,
} from "@/services/auth";
import { onMounted, ref } from "vue";

const auth = ref(false);

onMounted(() => {
  auth.value = checkIfUserIsLoggedIn();
});

const doLogout = () => {
  removeAuthToken();
  removeAuthRole();
  removeUserId();
  auth.value = false;
   router.push({ name: "home" });
};
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
      <p class="logout" v-if="auth" @click="doLogout">Logout</p>
    </nav>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.header {
  width: 100%;
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
  width: 100%;
  max-width: 1280px;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-size: 4rem;
}
.logo-title {
  display: flex;
  justify-content: space-around;
}
.logout {
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-right: 2rem;
  color: white;
  cursor: pointer;
}
@media(max-width:990px){
  .main {
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .nav{
    width: 100%;
  }
  h1{
    font-size:3rem;
  }
  img{
    width:70%;
  }
  .logout{
    width:20%;
  }
}    
@media(max-width:702px){
  .main {
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .nav{
    width: 100%;
  }
  h1{
    font-size: 2.5rem;
    right:5rem;
  }
  img{
    width:60%;
  }
}
@media(max-width:575px){
  .main {
  padding: 2rem;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .nav{
    width:100%;
  }
  img{
    width:40%;
    
  }
  h1{
    font-size: 2rem;
    right:7rem;
  }
}
@media(max-width:425px){
  .main {
 
  width: 1000px;
  height: 1000px;
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  align-items: center;
}
  .nav{
    width:100%;
  }
  img{
    width:40%;
    
  }
  h1{
    font-size: 2rem;
    right:7rem;
  }
}
</style>
