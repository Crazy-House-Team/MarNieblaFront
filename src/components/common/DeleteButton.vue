<script setup>
import { deleteAction } from '../../services/apiRequests';
import { defineProps } from "vue";

  defineProps({
  id: Number,
});

</script>
<template>
  <div>
    <div>
      <RouterLink :to="{ name: 'userlist', params: { role: 0 } }">
        <button
          type="button"
          class="btn button--red-outlined-delete m-1 text-center"
          @click="deleteAction('deleteUser', id)"
        >
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
  width: 100px;
  height: 60px; 
}
/* @media(max-width:1200px){
  .button--red-outlined-delete {
    background-color: #ffffff;
    border: 6px solid #f82c1d;
    border-radius: 20px;
    width: 100px;
    height: 60px; 
  }
  .button--red-outlined-delete h3{
    font-size: 16px;
  }
  
}
@media(max-width:1000px){
  .button--red-outlined-delete {
    background-color: #ffffff;
    border: 6px solid #f82c1d;
    border-radius: 20px;
    width: 100px;
    height: 60px; 
  }
  .button--red-outlined-delete h3{
    font-size: 16px;
  }
} */
</style>
