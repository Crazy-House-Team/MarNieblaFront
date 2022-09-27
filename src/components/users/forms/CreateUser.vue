<script setup>
import { ref } from "vue";
import { postAction } from "@/services/apiRequests";

const form = ref({
  name: "",
  email: "",
  password: "",
  isAdmin: false,
});

const handleSubmit = () => {
  postAction("storeUser", form.value);
};
</script>
<template>
  <form class="container" @submit="handleSubmit()">
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="name" class="form-label"></label>
      <input
        class="form-control ms-4"
        id="name"
        placeholder="Nombre y apellidos"
        v-model="form.name"
      />
    </div>

    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="email" class="form-label"></label>
      <input
        class="form-control ms-4"
        id="email"
        placeholder="Email"
        v-model="form.email"
      />
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="password" class="form-label"></label>
      <input
        class="form-control ms-4"
        id="password"
        placeholder="Password"
        v-model="form.password"
      />
    </div>
    <div
      class="form-check m-3 p-0 d-flex justify-content-start align-items-center"
    >
      <label class="form-check-label" for="flexCheckDefault"
        >¿Es Profesor?</label
      >
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
        v-model="form.isAdmin"
      />
    </div>
    <div>
      <button type="button" class="button--purple text-white">Cancelar</button>
      <button type="submit" class="button--green text-white">Guardar</button>
    </div>
  </form>
</template>

<style scoped>
input,
textarea {
  border: solid 2px #3ad86f;
  border-radius: 30px;
}
.form-control {
  margin: 30px;
  width: 900px;
  height: 65px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border: solid 5px #3ad86f;
  text-align: left;
}

#flexCheckDefault {
  left: 30px;
  bottom: 3px;
}
</style>
