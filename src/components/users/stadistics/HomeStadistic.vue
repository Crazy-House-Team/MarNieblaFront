<template>

    <div>
        <h1>Estadísticas de {{ props.name }}</h1>
    </div>

    <div class="d-flex mt-3">
        <label for="firstDate">Desde...</label>
        <input type="date" name="firstDate" v-model="firstDate">
        <label class="ms-5" for="lastDate">Hasta...</label>
        <input type="date" name="lastDate" v-model="lastDate">
    </div>
    <p class="mt-3">{{ msg }}</p>

    <div class="container">
        <div class="row row-cols-1 align-items-start justify-content-center">
            <div class="col-md-6">
                <h2 class="text-center textTitleStadistic">Aula</h2>
                <table class="table table-hover">
                    <thead class="head-background">
                        <tr>
                            <th scope="col">Fecha</th>
                            <th class="text-center" scope="col">Test</th>
                            <th class="text-center" scope="col">Aciertos</th>
                            <th class="text-center" scope="col">Errores</th>
                        </tr>
                    </thead>
                    <tbody v-for="userData in userDataStadistics.data">
                        <tr v-if="!userData.id_exam == 0">
                            <td>{{ userData.date }}</td>
                            <td class="text-center">{{ userData.id_exam }}</td>
                            <td class="text-center">{{ userData.right_answer }}</td>
                            <td class="text-center">{{ 20-userData.right_answer }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <h2 class="text-center textTitleStadistic">Individual</h2>
                <table class="table table-hover">
                    <thead class="head-background">
                        <tr>
                            <th scope="col">Fecha</th>
                            <th class="text-center" scope="col">Aciertos</th>
                            <th class="text-center" scope="col">Errores</th>
                        </tr>
                    </thead>
                    <tbody v-for="userData in userDataStadistics.data">
                        <tr v-if="userData.id_exam == 0">
                            <td>{{ userData.date }}</td>
                            <td class="text-center">{{ userData.right_answer }}</td>
                            <td class="text-center">{{ 20-userData.right_answer }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    <BackButton toRoute="/admin/userlist/0" />

</template>

<script setup>

    import { onMounted } from 'vue';
    import { getAction } from '../../../services/apiRequests';
    import { ref } from "vue";
    import BackButton from '../../common/BackButton.vue';

    const props = defineProps({
        id: String,
        name: String,
    });

    let userDataStadistics = ref([]);
    let firstDate = new Date();
    let lastDate = new Date();
    let msg = ref("");

    const data = ref({
        id: Number(props.id),

    })

    onMounted(async () => {
        userDataStadistics.value = await getAction('showUserStadistics/', props.id);
        if (userDataStadistics.data.length == 0) {
            msg.value = "No hay datos estadísticos";
        }
    });

</script>

<style scoped>
    .textTitleStadistic {
        border: solid 1px green;
        line-height: 1.6em;
    }

    th{
        color: green;
        font-weight: 900;
        border: none;
    }

    .head-background{
        background-color: rgb(175, 248, 175);
    }

    td{
        padding-top: 1px;
        border-bottom: solid 1px green;   
        line-height: 1.6em;
    }

</style>