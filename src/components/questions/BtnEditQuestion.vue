<script setup>

    defineProps({
      id: Number,
    });
  
  </script>
  
  <template>
  
    <div>
      <RouterLink :to="{ name: 'editquestion', params:{ id:id }}">
        <button
          type="button"
          class="btn button--orange-outlined-edit m-1 text-center"
        >
          <h3>Editar</h3>
        </button>
      </RouterLink>
    </div>
  
  </template>
  
  <style>
  
    .button--orange-outlined-edit {
      background-color: #ffffff;
      border: 6px solid #f8981d;
      border-radius: 20px;
      width: 160px;
      height: 50px;
    }
    h3{
      font-size: 25px;
    }
  </style>