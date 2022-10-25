<script setup>  
  import DeleteTestButton from "../../common/DeleteTestButton.vue";
  import SendTestButton from "../../common/SendTestButton.vue";

  defineProps({
    id: Number,
    name: String,
  });

</script>

<template>

  <li class="list-group-item d-flex justify-content-between align-items-center  ">

    {{ name}}-(ID: {{id}})
  
    <span class="badge d-flex">
      <SendTestButton :id=id />
      <DeleteTestButton :id=id />
    </span>
  </li>

</template>

<style scoped>
li {
  width: 100%;
  border: 0.2rem solid #92c954;
  font-size: 3rem;
  font-weight: bold;
  
}
@media(max-width:750px){
  .badge{
    display: flex;
    flex-direction: column;
    gap:10px;
  }
}
</style>
