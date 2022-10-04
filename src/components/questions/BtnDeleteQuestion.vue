<script setup>
    import { deleteAction } from '../../services/apiRequests';

    
      defineProps({
      id: Number,
    });
    function confirmDelete(){
        let msg = confirm("¿ Desea borrar esta presgunta ?");
        console.log(msg);
        if(msg ){
            deleteAction('deleteQuestion', id)
        }
    }
    
    </script>
    <template>
      <div>
        <div>
            <button
              type="button"
              class="btn button--red-outlined-delete m-1 text-center"
              @click="confirmDelete()">
              <h3>Eliminar {{id}}</h3>
            </button>
      
        </div>
      </div>
    </template>
    
    <style scoped>
    .button--red-outlined-delete {
      background-color: #ffffff;
      border: 6px solid #f82c1d;
      border-radius: 20px;
      width: 8vw;
      height: 6vh;
    }
    .button--red-outlined-delete:hover{
        border: 6px solid #ffffff;
        color:black;
    }
    </style>