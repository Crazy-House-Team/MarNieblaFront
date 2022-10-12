<script setup>

  import router from "@/router";
  import { ref } from "vue";
  import { registerAction } from "@/services/apiRequests";
  import BackButton from "../../common/BackButton.vue";
  import SaveButton from "../../common/SaveButton.vue";

  const form = ref({
    name: "",
    username: "",
    password: "",
    group: "",
    isAdmin: 0,
  });

  async function saveData(event) {
    event.preventDefault();
    if (form.value.group == "") form.value.group = "General";
    await registerAction(form.value);
    console.log(form.value);
    router.push("/admin/userlist/0");
  }

</script>

<template>
  <form class="container" @submit="saveData">
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="name" class="form-label"></label>
      <input
        type="text"
        class="form-control ms-4"
        id="name"
        placeholder="Nombre y apellidos"
        v-model="form.name"
      />
    </div>

    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="username" class="form-label"></label>
      <input
        type="text"
        class="form-control ms-4"
        id="username"
        placeholder="Nombre de usuario"
        v-model="form.username"
      />
    </div>
    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="password" class="form-label"></label>
      <input
        type="password"
        class="form-control ms-4"
        id="password"
        placeholder="Password"
        v-model="form.password"
      />
    </div>

    <div class="m-3 d-flex justify-content-start align-items-center">
      <label for="group" class="form-label"></label>
      <input
        type="text"
        class="form-control ms-4"
        id="group"
        placeholder="Grupo o Profesor"
        v-model="form.group"
      />
    </div>

    <div
      class="form-check m-3 p-0"
    >
      <label class="form-check-label" for="flexCheckDefault"
        >¿Es Profesor?</label
      >
      <input
        class="form-check-input"
        type="checkbox"
        id="flexCheckDefault"
        value = 1
        v-model="form.isAdmin"
      />
    </div>
    <div class="form-group">
      <div class="m-3 d-flex justify-content-center align-items-center">
      <BackButton toRoute="/admin/userlist/0" />
      <SaveButton class="ps-4"/>
      </div>
    </div>
  </form>

</template>

<style scoped>
input,
textarea {
  border: solid 2px #92C954;
  border-radius: 30px;
}
.form-control {
  margin: 4px;
  width: 900px;
  height: 65px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  border: solid 5px #92C954;
  text-align: left;
}

#flexCheckDefault {
  left: 30px;
  bottom: 3px;
}
.form-check{
  font-size: 30px;
  left:5px;
  display: flex;
  align-items: center;
  gap:40px;
}
.form-check-input{
  width:50px;
  height: 50px;
}

@media(max-width:991px){
  .button--green{
    left: 300px;
  }
}
@media(max-width:767px){
  .button--green{
    left: 110px;
  }
}
@media(max-width:700px){
    .form-control {
    margin: 4px;
    width: 430px;
    height: 65px;
    font-size: 24px;
    font-weight: bold;
    color: black;
    border: solid 5px #92C954;
    text-align: left;
  }
  .button--green{
    width:170px;
    left:120px;
  }

}
@media(max-width:625px){
  .form-control {
    margin: 4px;
    width: 350px;
    height: 65px;
    font-size: 24px;
    font-weight: bold;
    color: black;
    border: solid 5px #92C954;
    text-align: left;
  }
  .button--green{
    width:150px;
    left:85px;
  }
}
</style>
