<script setup>
    import SelectCompetencies from '../components/common/selectCompetencies.vue';
</script>
<template>
    <div>
        <h1>Gestión de preguntas</h1>
        <RouterLink to="/newquestion"><button>Nueva pregunta</button></RouterLink>
        <SelectCompetencies />
        <RouterLink to="/"><button>Volver</button></RouterLink>
    </div>
</template>
<style scoped>

</style>