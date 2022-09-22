<script setup>
    

</script>
<template>
    <div class="container">
        <h2 class="m-3">Nuevo Usuario</h2>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="name" class="form-label">Nombre</label>
            <input class="form-control ms-4" id="name" placeholder="Nombre">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="surname" class="form-label">Apellidos</label>
            <input class="form-control ms-4" id="surname" placeholder="Apellidos">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="email" class="form-label">Email</label>
            <input class="form-control ms-4" id="email" placeholder="Email">
        </div>
        <div class="m-3 d-flex justify-content-start align-items-center">
            <label for="password" class="form-label">Password</label>
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
    }
    input, textarea{
    border: solid 2px green;
    border-radius: 10px;
}
    #flexCheckDefault{
        left:30px;
        bottom:3px;
    }
</style>