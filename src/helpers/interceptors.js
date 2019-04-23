import api from '../api/index'
import store from '../store/index'
import { REFRESH_TOKEN } from '../store/modules/auth/action-types'

export default function setup () {
  api.interceptors.request.use(function (config) {
    let token = store.getters['auth/token']

    if (token) {
      config.headers['access-token'] = token.accessToken
      config.headers['client'] = token.client
      config.headers['uid'] = token.uid
    }
    return config
  }, function (err) {
    return Promise.reject(err)
  })

  api.interceptors.response.use(function (response) {
    store.commit(`auth/${REFRESH_TOKEN}`, response)
    return response
  }, function (error) {
    return Promise.reject(error)
  })
}
