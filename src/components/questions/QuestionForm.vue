<script setup>
  
  import router from '@/router';
  import BackButton from "../common/BackButton.vue";
  import SaveQuestionButton from "../common/SaveQuestionButton.vue";
  import { postAction } from "../../services/apiRequests";
  import { ref } from "vue";
     

  const data = ref({
    question:"",
    answer_a:"",
    answer_b:"",
    answer_c:"",
    answer_d:"",
    competencies_id: 1,
    right_answer:"",
  });

  const saveData = (event) => {
    event.preventDefault();
    postAction("storeQuestion", data.value);
    router.push({ path: 'questions' })
  };

</script>

<template>

  <div class="container">
    <div class="d-flex justify-content-center">
      <h2>Nueva pregunta</h2>
    </div>

    <form class="container" @submit="saveData">
      <div>
        <label for="questionlabel" class="form-label"
          >Enunciado de la pregunta</label>
          
        <textarea
        v-model="data.question"
          type="question"
          class="form-control"
          id="questionlabel"
          rows="3"
        >{{id}}</textarea>
      </div>

      <h2 class="m-3">Respuestas posibles</h2>

      <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="answer_a" class="form-label">A</label>
        <input  v-model="data.answer_a" class="form-control ms-4" id="answer_a" />
      </div>
      <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="answer_b" class="form-label">B</label>
        <input  v-model="data.answer_b" class="form-control ms-4" id="answer_b" />
      </div>
      <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="answer_c" class="form-label">C</label>
        <input v-model="data.answer_c" class="form-control ms-4" id="answer_c" />
      </div>
      <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="answer_d" class="form-label">D</label>
        <input  v-model="data.answer_d" class="form-control ms-4" id="answer_d" />
      </div>
      <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="answer_OK" class="form-label">¿Respuesta correcta?</label>

        <select  v-model="data.right_answer" class="form-select w-25 m-3" id="right_answer">
          <option selected value="0">Respuesta correcta</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>

        <select v-model="data.competencies_id" id="competencies_id" class="form-select w-25" aria-label="Default select example">
          <option selected value="1">Selecionar competencia</option>
          <option value="1">Matematicas</option>
          <option value="2">Lengua</option>
          <option value="3">Inglés</option>
        </select>
      </div>
    
    <div class="form-group">
      <div class="m-3 d-flex justify-content-center align-items-center">
        <SaveQuestionButton />
        <BackButton />
      </div>
    </div>
  </form>
  </div>
  
</template>

<style scoped>

  input,
  textarea,
  select {
    border: solid 2px green;
    border-radius: 10px;
    font-size: 1.6rem;
  }

</style>
