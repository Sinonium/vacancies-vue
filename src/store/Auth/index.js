import useAuth from '@/composables/useAuth'

const auth = {
  state: {
    currentUser: [],
  },
  mutations: {
    CREATE_USER(state, user) {
      state.currentUser = user
    },
  },
  actions: {
    async createUser({ commit }, user) {
      const { signup } = useAuth()

      const response = await signup(user.email, user.password, user.name)
      commit('CREATE_USER', response)
    },
  },

  modules: {},
}

export default auth
