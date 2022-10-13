<script setup >
    import router from '@/router';
    import { ref } from 'vue';
    import { postAction, putAction } from "../../services/apiRequests";
    import BackButton from '../common/BackButton.vue';


    const data = ref({
        id:Number,
        name:"",
        status:1,
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
            <BackButton toRoute="/admin/testlist" class="button-back" />
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
        gap:100px;
    }

    .button--green-outlined{
        height: 150px;
        width: 300px;
        border:10px solid #92c954;
        border-radius: 30px;
        font-size:25px;
        top:100px;
    }
    .button-back{
        width: 250px;
        height: 65px;
        border-radius: 30px;
        position:absolute;
        left:350px;
        top:300px;
    }
@media(max-width:991px){
    .button-test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
    }
    .button-back{
        position:absolute;
        left:225px;
       
    }
}
@media(max-width:767px){
    .button-test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
    }
    .button-back{
        position:absolute;
        left:140px;
    }
}
@media(max-width:700px){
    .button-test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
    }
    .button-back{
        position:absolute;
        left:140px;
    }
    .button-back h3{
    text-align: center;
    }
}
@media(max-width:575px){
    .button-test{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
    }
    .button-back{
        position:absolute;
        left:140px;
    }
    .button-back h3{
    text-align: center;
    }
}
</style>