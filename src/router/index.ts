import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Description from '../views/Description.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
