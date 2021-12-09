import { createStore } from 'vuex'
import auth from './Auth/index.js'
import getCollection from '@/composables/getCollection'
import getFilteredCollection from '@/composables/getFilteredCollection'
import useDoc from '../composables/useDoc.js'
export default createStore({
  state: {
    courses: [],
    courseMoreInfo: [],
    courseId: '',
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
    GET_COURSE_ID(state, id) {
      state.courseId = id
    },
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
      const { getSingleDoc } = useDoc()
      const { documents } = await getSingleDoc('more info', infoId.moreInfoId)
      console.log(documents.value)
      commit('GET_MORE_INFO', documents)
      commit('GET_COURSE_ID', infoId.courseId)
    },
  },
  modules: {
    auth,
  },
})
