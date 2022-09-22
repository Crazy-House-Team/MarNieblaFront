<template>
    <div>
        <RouterLink to="">
            <button class="btn text-white button-newuser">
                <h2>Crear Estudiante</h2>
            </button>
        </RouterLink>
    </div>
</template>
<script>
export default {
    methods:
    {
        back() {
            this.$router.go(-1)
        }
    }
};
</script>
<style>

</style>