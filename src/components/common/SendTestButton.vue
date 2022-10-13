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
          class="btn button--green-outlined-sendtest m-1 text-center">
          <h3>Lanzar test</h3>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.button--green-outlined-sendtest {
  background-color: #ffffff;
  border: 6px solid  #92c954;
  border-radius: 20px;
  width: 200px;
  height: 65px;
  text-align: center;
}
</style>
