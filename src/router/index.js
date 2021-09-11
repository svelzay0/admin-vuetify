import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../layouts/Auth.vue'
import AppLayout from '../layouts/AppLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/admin/home',
    name: 'Home',
    component: AppLayout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
