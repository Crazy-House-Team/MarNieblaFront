<script setup>

import { deleteAction, getAction } from '../../services/apiRequests';

defineProps({
  id: Number,
});
async function confirmDelete(id) {
  let msg = confirm("¿ Desea borrar esta pregunta ?");
  console.log(msg);
  if (msg) {
    await deleteAction('deleteQuestion', id);
    location.reload();
  }
}

</script>

<template>

<div>
    <div>
      <button type="button" class="btn button--red-outlined-delete m-1 text-center" @click="confirmDelete(id)">
        <h3>Eliminar</h3>
      </button>

    </div>
  </div>

</template>
    
<style scoped>
.button--red-outlined-delete {
  background-color: #ffffff;
  border: 6px solid #f82c1d;
  border-radius: 20px;
  width: 160px;
  height: 50px;
}

.button--red-outlined-delete:hover {
  border: 6px solid #ffffff;
  color: black;
}
</style>