<script setup>
import router from "@/router";
import { ref } from "vue";
import { putAction } from "@/services/apiRequests";

const props = defineProps({
  id: String,
});

const form = ref({
  id: Number(props.id),
  name: "",
  email: "",
  password: "",
  isAdmin: false,
});

const handleSubmit = (e) => {
  e.preventDefault();
  putAction("updateUser", form.value.id, form.value);

  router.go(-1);
};
</script>
<template>
  <form class="container" @submit="handleSubmit">
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="name" class="form-label"></label>
      <input class="form-control ms-4" id="name" v-model="form.name" />
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
      />
    </div>
    <div>
      <button
        type="button"
        class="button--purple text-white"
        @click="$router.go(-1)"
      >
        Cancelar
      </button>
      <button type="submit" class="btnedit button--green text-white">
        Guardar
      </button>
    </div>
  </form>
</template>

<style scoped>
h2 {
  text-align: center;
  font-size: 40px;
}
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
