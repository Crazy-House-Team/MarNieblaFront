<script setup>const newLocal = "\u0072\u0065\u0073\u0075\u006c\u0074";

</script>

<template>
    <div class="testResult">
        <div class="result">
            <li>Pregunta1 
                 <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta2
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta3
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta4
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta5
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta6
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta7
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta8
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta9
                <input type="checkbox" name="" id="">
            </li>
            <li>Pregunta10
                <input type="checkbox" name="" id="">
            </li>
            
        </div>
   

        <div class="totalResult">
            <h1>RESULTADOS:</h1>
            <input type="checkbox" name="" id="">
            <label for=""></label>
            <input type="checkbox" name="" id="">
            <label for=""></label>
        </div>
        <div class="testDay">
            <h1>TITULO DEL TEST</h1>
            <h1>REALIZADO EL: </h1>
            <h1>Check Verde</h1>
            <input type="checkbox" name="" id="">
            <h1>Check Rojo</h1>
            <input type="checkbox" name="" id="">
        </div>
    </div>
    <button type="submit" class="button--purple-outlined">TERMINAR PRUEBA</button>
    </template>



<style scoped>
.testResult{
 
    height: 800px;
    width: 1100px;
    position:absolute;
    border:#F8981D solid 10px;
 
}
.result{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-left: 50px;
}
.totalResult{
    height: 250px;
    width: 250px;
    background-color: #d9d9d9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 100px;
}
.testDay{
    height: 200px;
    width: 320px;
    background-color: #d9d9d9;
    position: absolute;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    right: 100px;
    top:550px;
    border: #92C954;
}
.button--purple-outlined{
    position:absolute;
    right:400px;
    bottom:50px;
    width:40vw;
    
}

</style>