import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Accueil'
  }
  ,
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("../views/Contact.vue")
  },
  {
    path: '/projet',
    name: 'Projet',
    component: ()=> import("../views/Projet.vue")
  }
  ,{
    path: '/test',
    name: 'Test',
    component: ()=> import("../components/Foo.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
