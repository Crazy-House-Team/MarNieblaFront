<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">
        <img
          src="@/assets/logo_mar-de-niebla-300x156.jpeg"
          alt="logotipo"
          class="header__logo"
        />
      </RouterLink>
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
  justify-content: center;
  align-items: center;
}
</style>
