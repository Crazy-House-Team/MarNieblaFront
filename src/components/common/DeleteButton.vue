<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'userlist' }">
        <button
          type="button"
          class="btn button--red-outlined-delete m-1 text-center"
        >
          <h3>Eliminar</h3>
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<script></script>
<style>
.button--red-outlined-delete {
  background-color: #ffffff;
  border: 6px solid #f82c1d;
  border-radius: 20px;
  width: 8vw;
  height: 6vh;
}
</style>
