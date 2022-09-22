<template>
    <div>
        <button @click="back" class="btn text-white button-back"><h2>Volver</h2></button>
    </div>
</template>
<script>
export default{
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