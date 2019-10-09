<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/albums">Albums</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shoes">Shoes</router-link> |
      <router-link to="/ClothingArticle">ClothingOverview</router-link>
    </div>
    <router-view>
    </router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    background-color:gray;

  }
  #nav{
    background-color:lightgray;
    width: 50%;
    margin-left: 25%;
    border-bottom-width: 2px;
    border-bottom-color:#2c3e50 ;
  }
  html,
  body {
    margin: 0;
    padding: 0;
    background-color:gray;
  }
</style>
