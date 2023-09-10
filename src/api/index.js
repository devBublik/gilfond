import axios from 'axios'
import store from '../store'
import router from '../router'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/userss',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    let status = error.response.status
    console.log('error', status)
    store.commit('setError', status)
    // if (status === 404) {
    //   router.push('/404')
    // }
    return Promise.reject(error)
  }
)

export const getPersons = () => {
  api()
    .then((res) => res)
    .catch(function (error) {
      console.log(error.toJSON())
    })
}

export default api
