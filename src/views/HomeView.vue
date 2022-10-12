<script setup>
import LoginForm from "../components/users/forms/LoginForm.vue";
</script>

<template>
  <section class="wrapper">
    <div class="title">
      <h1 class="title__h1">Mar de niebla te da la bienvenida</h1>
      <h2 class="title__h2">Identifícate para participar en un test</h2>
    </div>
    <LoginForm />
  </section>
</template>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
}

.title__h1 {
  font-size: 4rem;
  line-height: 4.8rem;
}
@media(max-width:1000px){
  .wrapper {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
  .title {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;  
  }

  h1{
    font-size: 2rem;
    line-height: 2.8rem;
  }
}
@media(max-width:702px){
  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 2rem;
}
  .title {

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;  
  }

  h1{
    font-size: 1.5rem;
    line-height: 1.7rem;
  }
}
</style>
