import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Description from '../views/Description.vue'
import DetailsCourse from '../views/DetailsCourse.vue'
import CreateCourse from '../views/CreateCourse.vue'
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
  {
    path: '/createCourse',
    name: 'CreateCourse',
    component: CreateCourse
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
