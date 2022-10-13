<script setup>

  import EditButton from "../common/EditButton.vue";
  import DeleteButton from "../common/DeleteButton.vue";
  import BtnStadistic from "./stadistics/BtnStadistic.vue";

  defineProps({
    id: Number,
    name: String,
    username: String,
    group: String,
    userRole: Number,
    role: Number,
    groupSearch: String,
  });

</script>

<template>

  <li v-if="userRole === role && groupSearch=='' || userRole === role && group==groupSearch" class="list-group-item d-flex justify-content-between align-items-center">
    {{ name }} - {{ username }} - ( Grupo : {{ group }} )
    <span class="badge d-flex">
      <EditButton :id="id" />
      <BtnStadistic :id="id" :name="name" />
      <DeleteButton :id="id" />
    </span>
  </li>
  
</template>

<style scoped>

  li {
    width: 100%;
    border: 0.2rem solid #92c954;
  }
@media(max-width:700px){
  .list-group-item{
    display: flex;
    flex-direction: column;
    
  }
}
</style>
