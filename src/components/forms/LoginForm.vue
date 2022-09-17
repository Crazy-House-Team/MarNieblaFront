<script setup></script>

<template>
  <form class="border p-4 rounded">
    <div class="mb-3">
      <label for="inputEmail" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="inputEmail"
        aria-describedby="emailHelp"
        required
      />
    </div>
    <div class="mb-3">
      <label for="inputPassword" class="form-label">Contraseña</label>
      <input type="password" class="form-control" id="inputPassword" required />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style lang="scss" scoped>
form {
  max-width: 500px;
  min-width: 50%;
}
</style>
