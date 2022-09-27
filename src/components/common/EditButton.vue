<template>
  <div>
    <RouterLink :to="{ name: 'userlist' }">
      <button
        type="button"
        class="btn button--orange-outlined-edit m-1 text-center"
      >
        <h3>Editar</h3>
      </button>
    </RouterLink>
  </div>
</template>
<script></script>
<style>
.button--orange-outlined-edit {
  background-color: #ffffff;
  border: 6px solid #f8981d;
  border-radius: 20px;
  width: 8vw;
  height: 6vh;
}
</style>
