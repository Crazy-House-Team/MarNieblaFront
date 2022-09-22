<script setup>
  import SelectCompetencies from '../common/selectCompetencies.vue';
  import BackButton from '../common/BackButton.vue';

</script>
<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <h2>Nueva pregunta</h2>
    </div>
    <div>
      <label for="questionlabel" class="form-label">Enunciado de la pregunta</label>
      <textarea type="question" class="form-control" id="questionlabel" rows="3"></textarea>
    </div>
    <h2 class="m-3">Respuestas posibles</h2>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="answer_A" class="form-label">A</label>
      <input class="form-control ms-4" id="answer_A">
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="answer_B" class="form-label">B</label>
      <input class="form-control ms-4" id="answer_B">
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="answer_C" class="form-label">C</label>
      <input class="form-control ms-4" id="answer_C">
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="answer_D" class="form-label">D</label>
      <input class="form-control ms-4" id="answer_D">
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="answer_OK" class="form-label">¿Respuesta correcta?</label>
      <input class="form-control ms-4" id="answer_OK" placeholder="Seleccionar A B C D">
    </div>
    <SelectCompetencies />
    <div>
      <BackButton />
      <button>Guardar</button>
    </div>
  </div>
</template>

<style scoped>

  input, textarea{
    border: solid 2px green;
    border-radius: 10px;
  }

</style>