import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Description from '../views/Description.vue'
import DetailsCourse from '../views/DetailsCourse.vue'

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
    path: '/detailsCourse',
    name: 'DetailsCourse',
    component: DetailsCourse
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
