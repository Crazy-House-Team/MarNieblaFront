<script setup>
  import BackButton from "../components/common/BackButton.vue";
  import CreateTestButton from "../components/common/CreateTestButton.vue";
  import TestRow from "../components/users/forms/TestRow.vue";

</script>

<template>
   <h1>Gestión de Test</h1> 
    <div class="justify-content-between d-flex w-100 m-4">
      <CreateTestButton/>
      <BackButton />
    </div>
    <ul class="list-group-item d-flex justify-content-between align-items-center">
      <TestRow />
    </ul>
</template>

<style scope>
  h1 {
    text-align: center;
  }

  ul {
    width: 100%;
  }
</style>