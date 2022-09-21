<script setup>
  import SelectCompetencies from '../common/selectCompetencies.vue';

</script>
<template>
  <div class="container mt-10">
    <div class="mt-10">
      <h1>Nueva pregunta</h1>
    </div>
    <div>
      <label for="questionlabel" class="form-label">Enunciado de la pregunta</label>
      <textarea type="question" class="form-control" id="questionlabel" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="answer_1" class="form-label">A</label>
      <textarea class="form-control" id="answer_A" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="answer_2" class="form-label">B</label>
      <textarea class="form-control" id="answer_B" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="answer_3" class="form-label">C</label>
      <textarea class="form-control" id="answer_C" rows="3"></textarea>
    </div>
    <div class="mb-3">
      <label for="answer_4" class="form-label">D</label>
      <textarea class="form-control" id="answer_D" rows="3"></textarea>
    </div>
    <SelectCompetencies />
    <button>Cancelar</button>
    <button>Guardar</button>
  </div>
</template>

<style>

</style>