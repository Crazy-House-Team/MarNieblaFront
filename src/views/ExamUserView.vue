
<script setup>




</script>
<template >
    
  <div class="container">
    <div class="d-flex justify-content-center">
      <h2>TEST 1 </h2>
    </div>
    <div>
      <label for="questionlabel" class="form-label">Pregunta 1</label>
      <textarea type="question" class="form-control" id="questionlabel" rows="3"></textarea>
    </div>
    <h2 class="m-3">Respuestas posibles</h2>
    <div class="respuestas">
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
 </div>
    
    <div>
      <button class="button--purple-outlined">ENVIAR RESPUESTA</button>
    </div>
  </div>
</template>

<style scoped>

 textarea {
  border: 6px solid #F8981D;
  border-radius: 0px;
  height: 150px;
  }
.button--purple-outlined {
  background-color: #ffffff;
  border: 6px solid #675979;
  border-radius: 20px;
  margin-left: 15%;
  height: 60px;
  width: 800px;
}

input{
  background-color: #ffffff;
  border:6px solid #92c954;
  border-radius: 30px;
  height: 80px;
  width: 450px;
}
</style>