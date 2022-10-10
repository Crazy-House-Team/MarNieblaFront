<script setup>

</script>

<template>
    <div class="testResult">
        <div class="result">
            <div class="NumberQuestionLeft">Pregunta 1 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 2 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 3 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 4 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 5 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 6 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 7 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 8 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 9 : True/False</div>
            <div class="NumberQuestionLeft">Pregunta 10 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 11 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 12 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 13 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 14 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 15 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 16 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 17 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 18 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 19 : True/False</div>
            <div class="NumberQuestionRight">Pregunta 20 : True/False</div>


            
        </div>
   

        <div class="totalResult">
            <h1>RESULTADOS:</h1>
            
            <div class="resultTrue"></div>
            <div class="resultNumberTrue"></div>
            <div class="resultFalse"></div>
            <div class="resultNumberFalse"></div>
        </div>
        <div class="testDay">
            <h3>TITULO DEL TEST</h3>
            <h3>REALIZADO EL: </h3>
            <div class="resultDay">
                <div class="checkTrue">
                    <h3>18</h3>
                    <h3>true</h3>
                </div>   
                
                <div class="checkFalse">
                    <h3>2</h3>
                    <h3>false</h3>
                </div>
            </div>
               
            
        </div>
    </div>
    <button type="submit" class="button--purple-outlined">TERMINAR PRUEBA</button>
    </template>



<style scoped>
.testResult{
    top:30px;
    height: 740px;
    width: 1100px;
    position:absolute;
    border:#F8981D solid 10px;
 
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
    display:flex;
    flex-direction: column;
    position: absolute;
    right: 100px;
    top:100px;    
}
.totalResult h1{
    top:20px;
    left:80px;
}
.resultTrue , .resultFalse , .resultNumberTrue , .resultNumberFalse{
    height: 60px;
    width: 80px;
    background-color: #fff;   
}
.resultTrue{
    left:50px;
    top:60px;
}
.resultNumberTrue{
    left:190px;
}
.resultFalse{
    left:50px;
    top:60px;
}
.resultNumberFalse{
    left:190px;
}

.testDay{
    height: 115px;
    width: 340px;
    background-color: #d9d9d9;
    position: absolute;
    display: flex;
    flex-direction:column ;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    right: 110px;
    top:550px;
    border: 5px solid #92C954;
    border-radius: 20px;
}
h3{
    left:30px;
}
.resultDay{
    height: 21px;
    width:40px;
}
.checkTrue , .checkFalse{
    display: fleX;
    flex-direction: row;
}
.checkTrue{
    gap:10px;

}
.checkFalse{
    left:100px;
    gap:10px;
    bottom:27px;
    position: relative;
}
.button--purple-outlined{
    position:absolute;
    right:350px;
    bottom:20px;
    width:600px
    
}

</style>