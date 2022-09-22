<script setup>
    

</script>
<template>
    <div class="container">
        <h2 class="m-3">AÑADIR USUARIO</h2>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="name" class="form-label"></label>
            <input class="form-control ms-4" id="name" placeholder="Nombre">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="surname" class="form-label"></label>
            <input class="form-control ms-4" id="surname" placeholder="Apellidos">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="email" class="form-label"></label>
            <input class="form-control ms-4" id="email" placeholder="Email">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="password" class="form-label"></label>
            <input class="form-control ms-4" id="password" placeholder="Password">
        </div>
        <div class="form-check m-3 p-0 d-flex  justify-content-start align-items-center">
            <label class="form-check-label" for="flexCheckDefault">¿Es Profesor?</label>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        </div>
        <div>
            <button type="submit" class="button--purple text-white">Cancelar</button>
            <button type="submit" class="button--green text-white">Guardar</button>
            
            
        </div>
    </div>
</template>

<style scoped>
    h2{
        text-align: center;
        font-size: 40px;
        
    }
    input, textarea{
    border: solid 2px #3AD86F;
    border-radius: 30px;
    }
    .form-control{
        
        margin:30px;
        width:900px;
        height:65px;
        font-size: 24px ;
        font-weight: bold;
        color:black;
        border: solid 5px #3AD86F; 
        text-align: left;


    }

    #flexCheckDefault{
        left:30px;
        bottom:3px;
    }
</style>