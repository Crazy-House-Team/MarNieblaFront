<script setup>
  
  import router from '@/router';
  import SaveQuestionButton from "../common/SaveQuestionButton.vue";
  import { getAction, postAction, putAction } from "../../services/apiRequests";
  import { onMounted, ref } from "vue";
import BackButton from '../common/BackButton.vue';
     
  const props = defineProps({
    id: String,
  })

  let questionData = [];

  const data = ref({
    id:Number(props.id),
    question:"",
    answer_a:"",
    answer_b:"",
    answer_c:"",
    answer_d:"",
    competencies_id: 1,
    right_answer:"",
  });

  onMounted(async () => {
    if(props.id > 0 ){
      questionData = await getAction('showQuestion/',props.id);
      console.log(questionData.data);
      data.value.question = questionData.data[0].question;
      data.value.answer_a = questionData.data[0].answer_a;
      data.value.answer_b = questionData.data[0].answer_b;
      data.value.answer_c = questionData.data[0].answer_c;
      data.value.answer_d = questionData.data[0].answer_d;
      data.value.competencies_id = questionData.data[0].competencies_id;
      data.value.right_answer = questionData.data[0].right_answer;
    }
  });

  async function saveData(event){
    event.preventDefault();
      if(props.id > 0 ){
        await putAction("updateQuestion", props.id, data.value)
      }else{
        await postAction("storeQuestion", data.value);
      }
      router.push('/admin/questions');    
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
        ></textarea>
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
          <option selected value="0">Selecionar competencia</option>
          <option value="1">Matematicas</option>
          <option value="2">Lengua</option>
          <option value="3">Inglés</option>
        </select>
      </div>
    
    <div class="form-group">
      <div class="m-3 d-flex justify-content-center align-items-center">
        <SaveQuestionButton />
        <BackButton toRoute="/admin/questions" class="ps-4"/>
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
