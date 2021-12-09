import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import DetailsCourse from '../views/DetailsCourse.vue'
import CreateCourse from '../views/CreateCourse.vue'
import Login from '../pages/Login.vue'
import SignUp from '../pages/SignUp.vue'
import Test from '../views/Test.vue'
import {user} from '../composables/getUser' 
import Becometeacher from '../views/BecomeTeacher.vue'
const requireAuth = (to, from, next) => {
  if (!user.value) {
    return next({name: 'Login'});
  }
  return next();
}
const requireNoAuth = (to, from, next) => {
  if (user.value) {
    return next({name: 'Home'});
  }
  return next();
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/DetailsCourse',
    name: 'DetailsCourse',
    component: DetailsCourse,
    beforeEnter: requireAuth
  },
  {
    path: '/createCourse',
    name: 'CreateCourse',
    component: CreateCourse,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: requireNoAuth
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    beforeEnter: requireNoAuth
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    beforeEnter: requireAuth
  },
  {
    path: '/becometeacher',
    name: 'Becometeacher',
    component: Becometeacher
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
