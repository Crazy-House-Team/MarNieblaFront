<script setup >
    import router from '@/router';
    import { ref } from 'vue';
    import { postAction, putAction } from "../../services/apiRequests";
    import BackButton from '../common/BackButton.vue';


    const data = ref({
        id:Number,
        name:"",
        status:0,
    });

    async function saveData(event){
        event.preventDefault();
        await postAction("storeExam", data.value);
        router.push('/admin/testlist');    
    };

</script>
<template>

    <h1>NUEVO TEST</h1>
    <form class="container" @submit="saveData">
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="exanName" class="form-label"></label>
            <input v-model="data.name" class="form-control ms-4" id="exanName" placeholder="NOMBRE DEL TEST : TEST 1" required >
        </div>
        <div class="button-test">
            <button type="submit" class="button--green-outlined ">GENERAR TEST</button>
            <BackButton toRoute="/admin/testlist" />
        </div>
    </form>
   
</template>

<style scoped>
    
    h1{
        color:black ;
        text-align: center;
        font-weight:300px;
        top:2vw;
    }
    .form-control{   
        margin:30px;
        width:900px;
        height:81px;
        font-size: 24px ;
        font-weight: bold;
        color:black;
        border: solid 6px #3AD86F;
        border-radius: 30px; 
        text-align: left;
        padding:1vw;
        top:4vw;
    }
    .button-test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:8vw;
    }
    button{
        top:8vw;
    }
    .button--green-outlined{
        height: 150px;
        width: 500px;
        border:10px solid #92c954;
        border-radius: 40px;
        font-size:1.5vw;
    }
    .button--orange-outlined{
        height: 150px;
        width: 500px;
        border-radius: 40px;
        border:10px solid #F8981D;
        font-size:1.5vw;
    }
</style>