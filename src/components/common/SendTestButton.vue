<script setup>

defineProps({
    id: Number,
  });

</script>
<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'examadmin', params: { role: 1 } }">
        <button
          type="button"
          class="btn button--red-outlined-sendtest m-1 text-center">
          <h3>Lanzar test {{ id }}</h3>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.button--red-outlined-sendtest {
  background-color: #ffffff;
  border: 6px solid  #92c954;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  text-align: center;
}
</style>
