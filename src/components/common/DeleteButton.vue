<script setup>

  defineProps({
    id:Number,
  })

</script>
<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'userlist', params: { role: 0 } }">
        <button
          type="button"
          class="btn button--red-outlined-delete m-1 text-center"
        >
          <h3>Eliminar {{id}}</h3>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.button--red-outlined-delete {
  background-color: #ffffff;
  border: 6px solid #f82c1d;
  border-radius: 20px;
  width: 8vw;
  height: 6vh;
}
</style>
