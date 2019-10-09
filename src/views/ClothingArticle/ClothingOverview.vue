<template>
    <div>
        <h1>Product Overview</h1>
        <div class = overview>
            <table>
                <input type="button" class="add" onclick="" value="Add">

                <tr v-for="product in products" v-bind:key="product.id">
                    <td><p>{{product.size.size}}</p></td>
                    <td><input type="button" class="bob" onclick="" value="Edit"></td>
                    <td><input type="button" class="bob" onclick="" value="Delete"></td>
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
            products: []
        }),
        methods: {
            fetchProducts() {

                axios.get('http://g3clothingstore.azurewebsites.net/api/clothings')
                    .then((data) => {
                        this.products = data.data;

                    });
            }
        }
    };
</script>

<style>
    th, td {
        padding: 15px;
    }
    td {
        text-align: left;
    }
    table{
        width: 100%;
        border-bottom: 1px solid #ddd;
    }
    p {
        color: #4CAF50;
    }

    .bob {
        background-color: #4CAF50; /* Green */
        border: #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }

    .overview
    {
        margin-left: 25%;
        width: 50%;
    }
    .add {
        background-color: #4CAF50; /* Green */
        border: #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-left: 400%
    }
</style>