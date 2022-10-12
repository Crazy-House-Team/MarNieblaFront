<script setup>
import { ref } from "vue";
import { loginAction } from "@/services/apiRequests";
import { useTokenStore } from "@/store/tokenStore";
import router from "../../../router";

const token = useTokenStore();

const userData = ref({
  email: "",
  password: "",
});

const doLogin = async () => {
  const response = await loginAction(userData.value);
  console.log(response);
  token.value = response.data.access_token.plainTextToken;
  const role = response.data.user.isAdmin;
  console.log(token.value);

  role === 0
    ? router.push({ name: "homeuser" })
    : router.push({ name: "admin" });
};
</script>

<template>
  <form
    @submit.prevent="doLogin"
    class="border-top border-bottom p-5 d-flex flex-column align-items-center"
  >
    <div class="mb-5 w-100">
      <div class="mb-3">
        <label for="inputUsername" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="inputUsername"
          aria-describedby="usernameHelp"
          required
          v-model="userData.email"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          required
          v-model="userData.password"
        />
      </div>
    </div>
    <button type="submit" class="button button--red-outlined">
      Identifícate
    </button>
  </form>
</template>

<style scoped>
form {
  max-width: 500px;
  min-width: 50%;
}


</style>
