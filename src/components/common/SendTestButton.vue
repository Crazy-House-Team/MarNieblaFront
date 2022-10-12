<script setup>
import { testQuestions } from "../../store/examInClass";
defineProps({
  id: Number,
});

const store = testQuestions();
function test(id) {
  store.testInClass(id);
  
}

</script>
<template>
  <div>
    <div>
      <!-- <RouterLink :to="{ name: 'examadmin', params: { role: 1 } }"> -->
      <button
        type="button"
        class="btn button--red-outlined-sendtest m-1 text-center"
        @click.prevent="test(id)"
      >
        <h3>Lanzar test {{ id }}</h3>
      </button>
      <!--       </RouterLink>
 -->
    </div>
  </div>
</template>

<style>
.button--red-outlined-sendtest {
  background-color: #ffffff;
  border: 6px solid #92c954;
  border-radius: 20px;
  width: 14vw;
  height: 6vh;
  text-align: center;
}
</style>
