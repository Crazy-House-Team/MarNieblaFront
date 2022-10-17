<script setup>
import { ref } from "vue";
import { loginAction } from "@/services/apiRequests";
import {
  checkIfUserIsAdmin,
  saveAuthRole,
  saveAuthToken,
  saveUserId,
} from "@/services/auth";
import router from "../../../router";

const userData = ref({
  username: "",
  password: "",
});

const doLogin = async () => {
  const response = await loginAction(userData.value);
  saveAuthToken(response.data.access_token.plainTextToken);
  saveAuthRole(response.data.user.isAdmin);
  saveUserId(response.data.user.id);
  router.go(0);
  checkIfUserIsAdmin()
    ? router.push({ name: "admin" })
    : router.push({ name: "homeuser" });
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
          v-model="userData.username"
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
