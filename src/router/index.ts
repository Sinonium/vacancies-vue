import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
=======
<<<<<<< HEAD
import Description from '../views/Description.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
=======
import Description from '../components/Description/Description.vue'
>>>>>>> 1edcc079df8f60fdc181cfae0a502bef34da9d2c
import DetailsCourse from '../views/DetailsCourse.vue'
>>>>>>> 4bbf81640c888d709f5fda5732cc0ed7ea268a69

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
<<<<<<< HEAD
=======
    path: '/description',
    name: 'Description',
    component: Description
  },
  {
<<<<<<< HEAD
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
=======
>>>>>>> 1edcc079df8f60fdc181cfae0a502bef34da9d2c
    path: '/detailsCourse',
    name: 'DetailsCourse',
    component: DetailsCourse
>>>>>>> 4bbf81640c888d709f5fda5732cc0ed7ea268a69
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
