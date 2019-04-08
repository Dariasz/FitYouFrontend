import { AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS } from './action-types'
import api from '../../../api/index'

export default {
  [AUTH_REQUEST]: ({ commit, dispatch }, { email, password }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      api.post('api/auth/sign_in', {
        email: 'user-1@example.com', password: 'em12345678'
      }).then((response) => {
        commit(AUTH_SUCCESS, response)
        resolve(response)
      })
    })
  },

  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      resolve()
    })
  }
}
