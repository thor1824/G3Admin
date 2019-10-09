<template>
    <div class="main" :key="componentKey">


        <v-text-field class="txtfield"
                      v-model="size"
                      label="Size"
                      required

        ></v-text-field>
        <v-text-field
                class="txtfield"
                v-model="type"
                label="Type"
                required
        ></v-text-field>
        <v-container id='example-3'>
            <h3>Colors</h3>
            <br>
            <v-row v-for="color in kindsOfColors" :key="color.id">
                <input class="Check" type="checkbox" :id="color.id" :value="color.id" v-model="checkedNames">
                <label :for="color.id">{{color.color}}</label>
            </v-row>
            <div id='example-3'>

            </div>
        </v-container>
        <v-text-field
                class="txtfield"
                v-model="price"
                label="Price"
                required
        ></v-text-field>
        <v-text-field
                class="txtfield"
                v-model="gender"
                label="Gender"
                required
        ></v-text-field>
        <v-text-field
                class="txtfield"
                v-model="imageurl"
                label="ImageUrl"
                required
        ></v-text-field>

        <v-btn class="btn-add" @click="Create()">
            Add
        </v-btn>

    </div>
</template>

<script>
    import axios from 'axios';


    export default {
        name: "ClothingCreate",
        el: '#example-3',
        data: () => ({
            size: '',
            type: '',
            kindsOfColors: ['black'],
            Colors: [],
            price: '',
            gender: '',
            imageurl: '',
            newSize: '',
            message: '',
            componentKey: 0,
            checkedNames: [],

        }),
        mounted() {
            this.fetchColor();
        },

        methods: {
            Create() {
                axios.post('http://g3clothingstore.azurewebsites.net/api/clothings', {
                    "size": this.size,
                    "colors": this.checkedNames,
                    "clothingType": this.type,
                    "price": this.price,
                    "gender":this.gender,
                    "imageurl":this.imageurl

                }).then((data) => {this.click()});

            },
            fetchColor() {
                axios.get('http://g3clothingstore.azurewebsites.net/api/colors')
                    .then((data) => {
                        this.kindsOfColors = data.data;

                    });
            },
            click() {
                this.size = '';
                this.componentKey += 1;
                return this.size;

            },

        }
    }


</script>

<style scoped>
    .main {
        margin-left: 25%;
        width: 50%;
        background-color: lightgray;
        margin-bottom: 0%;
    }
    h3{
        margin-left: -80%;
    }
    .Check
    {
        margin-left: 30px;
    }
    .btn-add{
        margin-left: 80%;
        margin-bottom: 10px;
    }
    .txtfield {
        margin-left: 30px;
        margin-right: 60px;

    }
</style>