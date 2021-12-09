const categories = {
   state: () => ({
      category: []
   }),
   getters: {

   },
   mutations: {
      SET_CATEGORY(state, payload) {
         state.category = [payload.main, payload.category, payload.sub]
      }
   },
   actions: {

   }
}

export default categories