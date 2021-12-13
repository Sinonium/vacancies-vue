import { createStore } from 'vuex'
import auth from './Auth/index.js'
import categories from './categories'
import getCollection from '@/composables/getCollection'
import getFilteredCollection from '@/composables/getFilteredCollection'
import getAnyCollection from '@/composables/getAnyCollection'
import useDoc from '../composables/useDoc.js'
import middleCourseGrade from './middleCourseGrade.js'
export default createStore({
  state: {
    courses: [],
    courseMoreInfo: null,
    courseId: '',
    userInfo: null,
  },
  mutations: {
    GET_COURSES(state, payload) {
      state.courses = payload
    },
    GET_FILTERED_COURSES(state, doc) {
      state.courses = doc
    },
    GET_LIKED_COURSES(state, payload) {
      state.courses = payload
    },
    GET_MORE_INFO(state, info) {
      state.courseMoreInfo = info
    },
    GET_COURSE_ID(state, id) {
      state.courseId = id
    },
    GET_USER_INFO(state, user) {
      state.userInfo = user
    },
  },
  actions: {
    async getCourses({ commit }) {
      const { documents } = await getCollection('courses')
      commit('GET_COURSES', documents)
    },
    async getFilteredCollection({ commit }, category) {
      const { documents } = await getFilteredCollection(
        'courses',
        'categories',
        category
      )
      commit('GET_FILTERED_COURSES', documents)
    },
    async getMoreInfo({ commit }, infoId) {
      const { getSingleDoc } = useDoc()
      const { documents } = await getSingleDoc('more info', infoId.moreInfoId)
      commit('GET_MORE_INFO', documents)
      commit('GET_COURSE_ID', infoId.courseId)
    },
    async getAnyCollection({ commit }, params) {
      const { documents } = await getAnyCollection(
        'courses',
        'categories',
        params
      )
      commit('GET_FILTERED_COURSES', documents)
    },
    async getUserInfo({ commit }, userId) {
      const { getSingleDoc } = useDoc()
      const { documents } = await getSingleDoc('users', userId)
      commit('GET_USER_INFO', documents)
    },
  },
  modules: {
    auth,
    categories,
    middleCourseGrade
  },
})
