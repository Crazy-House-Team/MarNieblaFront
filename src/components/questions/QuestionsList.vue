<script setup>
   
    import BtnEditQuestion from "./BtnEditQuestion.vue";
    import BtnDeleteQuestion from "./BtnDeleteQuestion.vue";

    defineProps({
        id: Number,
        question: String,
    });

</script>

<template>  

    <li class="list-group-item d-flex justify-content-between align-items-center">
        {{question}}
        <span class="badge d-flex">
        <BtnEditQuestion :id=id />
        <BtnDeleteQuestion :id=id />
        </span>
    </li>

</template>

<style scoped>

    li {
    width: 100%;
    border: 0.2rem solid #92c954;
    gap:10px;
    }
    span{
        gap:10px;
    }
@media(max-width:850px){
    .list-group-item {
        display: flex;
        flex-direction: column;
        gap:20px;
    }
    .badge{
        gap:20px;
        bottom: 5px;
    }
}
</style>