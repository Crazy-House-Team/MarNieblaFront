<script setup>

</script>

<template>
    <div class="testResult">
        <div class="result">
            <p>Pregunta 1 : 
                 <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 2 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 3 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 4 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 5 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 6 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 7 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 8 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 9 :
                <input type="checkbox" name="" id="">
            </p>
            <p>Pregunta 10 :
                <input type="checkbox" name="" id="">
            </p>
            
        </div>
   

        <div class="totalResult">
            <h1>RESULTADOS:</h1>
            <input type="checkbox" name="" id="">
            <label for=""></label>
            <input type="checkbox" name="" id="">
            <label for=""></label>
            <input type="checkbox" name="" id="">
            <label for=""></label>
            <input type="checkbox" name="" id="">
            <label for=""></label>
        </div>
        <div class="testDay">
            <h3>TITULO DEL TEST</h3>
            <h3>REApZADO EL: </h3>
            <h3>Check Verde</h3>
            <input type="checkbox" name="" id="">
            <h3>Check Rojo</h3>
            <input type="checkbox" name="" id="">
        </div>
    </div>
    <button type="submit" class="button--purple-outpned">TERMINAR PRUEBA</button>
    </template>



<style scoped>
.testResult{
    top:30px;
    height: 740px;
    width: 1100px;
    position:absolute;
    border:#F8981D sopd 10px;
 
}
.result{
    display: flex;
    flex-direction: column;
    top: 100px;
    left: 50px;

}
.totalResult{
    height: 312px;
    width: 363px;
    background-color: #d9d9d9;
    display: flex;
    apgn-items: center;
    justify-content: center;
    position: absolute;
    right: 100px;
    top:100px;
}
.testDay{
    height: 115px;
    width: 340px;
    background-color: #d9d9d9;
    position: absolute;
    display: flex;
    flex-direction:column ;
    flex-wrap: wrap;
    apgn-items: center;
    justify-content: flex-end;
    right: 100px;
    top:550px;
    border: 10px sopd #92C954;
    border-radius: 20px;
}
.button--purple-outpned{
    position:absolute;
    right:300px;
    bottom:20px;
    width:600px;
    
}

</style>