<script setup>

</script>
<template>
<div class="modal" id="appointmentModal" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Eliminar Usuario</h5>
      </div>
      <div class="modal-body">
       <p>¿Desea eliminar este usuario?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="secondary-button" data-bs-dismiss="modal">Cerrar</button>
        <span id="appointment"></span>
      </div>
    </div>
  </div>
</div>

</template>


<style scoped>
.modal-dialog {
  margin-top: 0;
  margin-bottom: 0;
  height: 100vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -100%);
          transform: translate(0, -100%);
}
.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
          transform: translate(0, 0);
}

</style>