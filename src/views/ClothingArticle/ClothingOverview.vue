<template>
    <div class="all">

        <div class = overview>
            <h1>Product Overview</h1>
            <button class="add"  @click="$router.push({name: 'ClothCreate'})">+</button>
            <table v-bind:key="componentKey">


                <tr v-for="product in products" v-bind:key="product.id">
                    <td><p>{{product.id}}</p></td>
                    <td><p>{{product.clothingType.cType}}</p></td>
                    <td><p>${{product.price}}</p></td>
                    <td><p>{{product.gender}}</p></td>
                    <td><p>{{product.imageUrl}}</p></td>

                    <td><button class="bob" @click="$router.push({name: 'ClothDetail', params: { id: product.id },})">Edit</button></td>
                    <td><button class="bob" @click="deleteProduct(product.id)"> X</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>
¨
<script>
    import axios from 'axios';

    export default {
        mounted() {
            this.fetchProducts()
        },
        data: () => ({
            products: [{}],
            componentKey: 0,
        }),
        methods: {
            fetchProducts() {

                axios.get('http://g3clothingstore.azurewebsites.net/api/clothings')
                    .then((data) => {
                        this.products = data.data;

                    });
            },
            deleteProduct(id){
                axios.delete('http://g3clothingstore.azurewebsites.net/api/clothings/'+ id);
                this.fetchProducts();
                this.componentKey += 1;
            }

        }
    };
</script>

<style>
    th, td {
        padding: 5px;
    }
    td {
        text-align: left;
    }
    tr {
        border-bottom: 1px solid #ddd;
    }
    table{
        width: 100%;
        border-bottom: 1px solid #ddd;
        border: 2px solid #2c3e50;
        margin-top: 5px;
    }
    p {
        color: #4CAF50;
    }

    .bob {
        background-color: #4CAF50; /* Green */
        border: #4CAF50;
        color: white;
        padding: 15px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .overview
    {
        margin-left: 25%;
        width: 50%;
        background-color:lightgray;
    }

    btn btn-danger {
        background-color: #4CAF50; /* Green */
        border: #4CAF50;
        color: white;
        padding: 15px 15px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .add {
        background-color: #4CAF50; /* Green */
        border: #4CAF50;
        color: white;
        padding: 15px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        alignment: right;
        margin-right: -88%;
        margin-top: 2px;
    }
    .all
    {
        background-color:gray;
    }
</style>