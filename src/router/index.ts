import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Description from '../views/Description.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/description',
    name: 'Description',
    component: Description
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
