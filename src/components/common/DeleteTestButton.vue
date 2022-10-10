<script setup>
  import { deleteAction, getAction } from '../../services/apiRequests';

defineProps({
      id: Number,
    });
    async function confirmDelete(id){
        let msg = confirm("¿ Desea borrar este test?");
        console.log(msg);
        if(msg){
            await deleteAction('deleteExam', id);
            location.reload();
        }
    }
    
</script>
<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'testlist', params: { role: 1 } }">
        <button
          type="button"
          class="btn button--red-outlined-delete m-1 text-center" @click="confirmDelete(id)">
          <h3>Eliminar</h3>
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
