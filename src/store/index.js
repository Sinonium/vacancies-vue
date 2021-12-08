
import { createStore } from 'vuex'
import auth from './Auth/index.js'


export default createStore({
  state: {
    courses: [],
  },
  mutations: {
  
  },
  actions: {

  },

  modules: {
    auth
  }
})