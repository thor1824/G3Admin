import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AlbumsOverview from "./views/albums/AlbumsOverview";
import AlbumsCreate from "./views/albums/AlbumsCreate";
import AlbumsUpdate from "./views/albums/AlbumsUpdate";
import ShoesList from "./views/shoes/ShoesList";
import ClothingOverview from "./views/ClothingArticle/ClothingOverview";
import ClothingEdit from "./views/ClothingArticle/ClothingEdit";
import ClothingCreate from "./views/ClothingArticle/ClothingCreate";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/albums-create',
      name: 'albums-create',
      component: AlbumsCreate
    },
    {
      path: '/albums-update/:id',
      name: 'albums-update',
      component: AlbumsUpdate
    },
    {
      path: '/albums',
      name: 'albums',
      component: AlbumsOverview
    },
    {
      path: '/shoes',
      name: 'shoes',
      component: ShoesList
    },
    {
      path: '/ClothingArticle',
      name: 'Cloths',
      component: ClothingOverview
    },{
      path: '/ClothingArticle/e/:id',
      name: 'ClothDetail',
      component: ClothingEdit
    },{
      path: '/ClothingArticle/c',
      name: 'ClothCreate',
      component: ClothingCreate
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
