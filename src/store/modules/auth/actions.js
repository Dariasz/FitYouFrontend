import { AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS, REFRESH_TOKEN } from './action-types'
import api from '../../../api/index'

export default {
  [AUTH_REQUEST]: ({ commit, dispatch }, { email, password }) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      api.post('auth/sign_in', {
        email: email, password: password
      }).then((response) => {
        commit(AUTH_SUCCESS, response)
        resolve(response)
      })
    })
  },

  [AUTH_LOGOUT]: ({ commit }) => {
    return new Promise((resolve) => {
      commit(AUTH_LOGOUT)
      resolve()
    })
  },
}
