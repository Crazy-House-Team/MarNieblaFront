<script setup>

</script>
<template >
  <div class="container">
    <!-- <div class="row justify-content-end"> -->
      <div class="row justify-content-start">

        <div class="col-8">
          <label for="questionlabel" class="pregunta form-label d-flex justify-content-center ">TEST 1 - PREGUNTA 1</label>
          <textarea type="question" class="question form-control" id="questionlabel" rows="3"></textarea>
        </div>

        <div class="col-4">
          <h3>ALUMNOS CONECTADOS</h3>
          <output type="students" class="studentslist form-control" id="studentslabel" rows="3"></output>
        </div>

        <div class="respuestas mt-2">

          <div class="row">
            <div class="col-4 col-lm-3 mt-4 d-flex justify-content-start align-items-center">
              <label for="answer_A" class="form-label" ></label>
              <input class="form-control mt-4 me-3" id="answer_A" placeholder="A">
            </div>

            <div class="col-4 col-lm-3 mt-4 d-flex justify-content-start align-items-center">
              <label for="answer_C" class="form-label"></label>
             <input class="form-control mt-4 me-3" id="answer_C" placeholder="C">
            </div>
          </div>

          <div class="row">
            <div class="col-4 col-lm-3 mt-4 d-flex justify-content-start align-items-center">
              <label for="answer_B" class="form-label"></label>
              <input class="form-control mt-4 me-3" id="answer_B" placeholder="B" >
            </div>

            <div class="col-4 col-lm-3 mt-4 d-flex justify-content-start align-items-center">
              <label for="answer_D" class="form-label"></label>
              <input class="form-control mt-4 me-3" id="answer_D" placeholder="D">
            </div>
          </div>
        </div>
      </div>
    <!-- </div> -->

    <div class="row">
      <div class="col-6 col-lm-3 mt-4 d-flex justify-content-center align-items-center">
        <button class="button--purple-outlined mt-5">ACTIVAR PREGUNTA</button>
      </div>
      <div class="col-6 col-lm-3 mt-4 d-flex justify-content-center align-items-center">
        <button class="button--purple-outlined mt-5">SIGUIENTE PREGUNTA</button>
      </div>
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
    font-size: 100%;
    margin:0;
 }

.question{
   border: 6px solid #F8981D;
   border-radius: 0px;
   height: 90%;
   width: 100%;
  }
  .studentslist{
 border: 3px solid #52504d;
   border-radius: 0%;
   height:300%;
   width: 100%;
   margin-right: 10%;
  }
  h3{
    text-align: center;
  }
 
 .button--purple-outlined {
   background-color: #ffffff;
   border: 6px solid #675979;
   border-radius: 2rem;
   height: 80%;
   width:100%;

 }

 input{
  background-color: #ffffff;
  border:6px solid #92c954;
  border-radius: 3rem;
  height: 80px;
  width: 400px;
 
  
  
 }
    
</style>