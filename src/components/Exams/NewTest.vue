<script setup >

</script>
<template>

    <h1>NUEVO TEST</h1>
    <div class="m-3 d-flex justify-content-start align-items-center">
        <label for="newtest" class="form-label"></label>
        <input class="form-control ms-4" id="newtest" placeholder="NOMBRE DEL TEST : TEST 1">
    </div>
    <div class="button-test">
        <button type="submit" class="button--green-outlined ">GENERAR TEST</button>
        <button type="submit" class="button--orange-outlined ">VOLVER</button>  
    </div>
   
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