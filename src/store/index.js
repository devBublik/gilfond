import axios from 'axios'
import { createStore } from 'vuex'
import getPersons from '@/api'

export default createStore({
  state: () => ({
    persons: [],
    error: null
  }),

  getters: {
    getPersons(state) {
      return state.persons
    },
    getError(state) {
      return state.error
    }
  },
  mutations: {
    setPersons(state, persons) {
      state.persons = persons
    },
    setError(state, err) {
      state.error = err
    }
  },
  actions: {
    async fetchPersons({ state, commit }) {
      const res = await getPersons()
      commit('setPersons', res.data)
    }
  },
  modules: {}
})
