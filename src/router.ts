import Vue from 'vue'
import VueRouter from 'vue-router'

import InsertPage from "@/Pages/InsertPage.vue";
import HomePage from "@/Pages/HomePage.vue";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: InsertPage },
    { path: '/home', component: HomePage },
    { path: '/:notFound(.*)', redirect: '/' },
  ]
})