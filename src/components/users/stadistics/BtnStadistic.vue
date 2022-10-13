<script setup>

  defineProps({
    id: Number,
    name: String,
    
  });

</script>

<template>

  <div>
    <RouterLink :to="{ name: 'stadistics', params:{ id:id, name:name }}">
      <button
        type="button"
        class="btn button--orange-outlined-edit m-1 text-center"
      >
        <h3>Estadística</h3>
      </button>
    </RouterLink>
  </div>

</template>

<style>

  .button--orange-outlined-edit {
    background-color: #ffffff;
    border: 6px solid #f8981d;
    border-radius: 20px;
    width: 160px;
    height: 60px;
  }

</style>