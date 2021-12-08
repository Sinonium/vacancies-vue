import { createStore } from 'vuex'
import auth from './Auth/index.js'
import categories from './categories'
import getCollection from '@/composables/getCollection'
import getFilteredCollection from '@/composables/getFilteredCollection'

export default createStore({
  state: {
    courses: [],
    courseMoreInfo: [],
    categoryItem: []
  },
  mutations: {
    GET_COURSES(state, payload) {
      state.courses = payload
    },
    GET_FILTERED_COURSES(state, doc) {
      state.courses = doc
    },
    GET_MORE_INFO(state, info) {
      state.courseMoreInfo = info
    },
    SET_CATEGORY(state, payload) {
      state.categoryItem = payload
   }
  },
  actions: {
    async getCourses({ commit }) {
      const { documents } = await getCollection('courses')
      commit('GET_COURSES', documents)
      console.log(documents.value)
    },
    async getFilteredCollection({ commit }, category) {
      const { documents } = await getFilteredCollection(
        'courses',
        'development',
        category
      )
      console.log(documents.value)
      commit('GET_FILTERED_COURSES', documents)
    },
    async getMoreInfo({ commit }, infoId) {
      const { documents } = await useDoc('more info', infoId)
      commit('GET_MORE_INFO', documents)
    },
  },
  modules: {
    auth,
    categories
  },
})
