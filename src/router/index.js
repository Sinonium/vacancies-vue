import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DetailsCourse from '../views/DetailsCourse.vue'
import CreateCourse from '../views/CreateCourse.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import Test from '../views/Test.vue'
import {user} from '../composables/getUser' 

// const requireAuth = (to, from, next) => {
//   if (!user.value) {
//     return next({name: 'Login'});
//   }
//   return next();
// }


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: requireAuth
  },
  {
    path: '/DetailsCourse',
    name: 'DetailsCourse',
    component: DetailsCourse
  },
  {
    path: '/createCourse',
    name: 'CreateCourse',
    component: CreateCourse
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
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
