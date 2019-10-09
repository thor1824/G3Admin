<template>
    <div>
        <h1>Hi</h1>
        <ul>
            <li v-for="product in products"
                v-bind:key="product.id"><p>{{product.size.size}}</p></li>
        </ul>

    </div>
</template>
¨
<script>
    import axios from 'axios';
  export default {
    mounted() {
      this.fetchProducts()
    },
    data: ()  => ({
      products: [{id: 1, size: 'Helo'},{id: 2, size: 'Bøf'}]
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
