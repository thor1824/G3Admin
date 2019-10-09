<template>
    <div>
        <input v-model="message" placeholder="edit me">
        <p>Message is: {{ message }}</p>
        <v-text-field
                v-model="size"
                label="Size"
                required
        ></v-text-field>
        <v-text-field
                v-model="type"
                label="Type"
                required
        ></v-text-field>
        <v-text-field
                v-model="Colors"
                label="Colors"
                required
        ></v-text-field>
        <v-text-field
                v-model="price"
                label="Price"
                required
        ></v-text-field>
        <v-text-field
                v-model="newSize"
                label="Gender"
                required
        ></v-text-field>
        <v-text-field
                v-model="imageurl"
                label="ImageUrl"
                required
        ></v-text-field>
        <v-btn
                click="this.newSize = Create()"
                color="pink"
                text
        >Close</v-btn>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ClothingCreate",
        data: ()  => ({
            size: '',
            type:'',
            Colors:  [
                { name: 'John', id: 1 },
                { name: 'Jack', id: 2 },
                { name: 'Jill', id: 3 }
            ],
            price:'',
            gender:'',
            imageurl:'',
            cID: this.$route.params.id,
            newSize: '',
            message:''
        }),
        methods: {
            Create()
            {
                return this.size;

            }
        }
    }


</script>

<style scoped>

</style>