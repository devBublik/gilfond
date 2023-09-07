import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    persons: []
  }),

  getters: {
    getPersons(state) {
      return state.persons
    }
  },
  mutations: {
    setPersons(state, persons) {
      state.persons = persons
    }
  },

  actions: {
    fetchPersons({ state, commit }) {
      try {
        fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
          if (response.ok) {
            console.log(response.data)
            commit('setPersons', response.data)
          }
        })
      } catch (e) {
        console.log('error')
      }
    }
  },
  modules: {}
})
