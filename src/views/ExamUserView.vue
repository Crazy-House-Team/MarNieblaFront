
<script setup>

</script>
<template >
  <div class="container">
    <div>
      <label for="questionlabel" class="pregunta form-label d-flex justify-content-center ">TEST 1 - PREGUNTA 1</label>
      <textarea type="question" class="form-control" id="questionlabel" rows="3"></textarea>
    </div>
   
    <div class="respuestas mt-2">
            <div class="row">
                <div class="col-6 col-xlm-3 mt-3 d-flex justify-content-start align-items-center">
                    <label for="answer_A" class="form-label" ></label>
                    <input class="form-control mt-3 ms-4" id="answer_A" placeholder="A">
                </div>
                <div class="col-6 col-xlm-3 mt-3 d-flex justify-content-start align-items-center">
                    <label for="answer_C" class="form-label"></label>
                    <input class="form-control  mt-3 ms-4" id="answer_C" placeholder="C">
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-xlm-3 mt-3 d-flex justify-content-start align-items-center">
                    <label for="answer_B" class="form-label"></label>
                    <input class="form-control ms-4 mt-3" id="answer_B" placeholder="B" >
                </div>
                <div class="col-6 col-lm-3 mt-3 d-flex justify-content-start align-items-center">
                    <label for="answer_D" class="form-label"></label>
                    <input class="form-control ms-4 mt-3" id="answer_D" placeholder="D">
                </div>
            </div>
    </div>
    <div>
      <button class="button--purple-outlined mt-5">ENVIAR RESPUESTA</button>
    </div>
  </div>
</template>

<style scoped> 
    
   h2 {
    font-size: 25px;
   }

 .form-label {
    font-size: 20px;
    margin: 20px;
  }
 .pregunta {
    color: #F8981D;
    font-size: 25px;
    margin:0;
 }

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
   height: 55px;
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