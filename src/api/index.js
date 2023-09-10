import axios from 'axios'
import store from '../store'
import router from '../router'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  function (response) {
    store.commit('setError', '')
    return response
  },
  function (error) {
    let status = error.response.status
    store.commit('setError', status)
    if (status === 404) {
      router.push('/404')
    }
    return Promise.reject(error)
  }
)

export const getPersons = () => {
  api.then((res) => res)
}

export default api
