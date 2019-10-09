<template>
    <h1>{{cID}}</h1>
</template>

<script>
    export default {
        name: "ClothingEdit",
        props:
        {

        },
        data ()
        {
            return{cID: this.$route.params.id}
        }
    }

</script>

<style scoped>

</style>