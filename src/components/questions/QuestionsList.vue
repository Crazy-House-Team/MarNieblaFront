<script setup>
import Question from "./Question.vue";
    // Hay que poner un for que leea todas las preguntas
    // Forma de la tabla questions:
    /*  'question',
        'answer_a',
        'answer_b',
        'answer_c',
        'answer_d',
        'competencies_id',
        'right_answer',*/
</script>
<template>
    <div class="container">
        <div v-for="index in 5">
            <Question />   
        </div>
    </div>
</template>
<style scoped>

</style>