<script setup></script>

<template>
  <form
    class="border-top border-bottom p-5 d-flex flex-column align-items-center"
  >
    <div class="mb-5 w-100">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail"
          aria-describedby="emailHelp"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          required
        />
      </div>
    </div>
    <button type="submit" class="button button--red-outlined">
      Identifícate
    </button>
  </form>
</template>

<style lang="scss" scoped>
form {
  max-width: 500px;
  min-width: 50%;
}
</style>
