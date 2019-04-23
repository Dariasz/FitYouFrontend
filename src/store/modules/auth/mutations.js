import { AUTH_LOGOUT, AUTH_REQUEST, AUTH_SUCCESS, REFRESH_TOKEN } from './action-types'

export default {
  [AUTH_REQUEST]: (state) => {
    state.isLoading = true
  },
  [AUTH_SUCCESS]: (state, { data, headers }) => {
    const userData = data.data

    state.user = {
      firstName: userData['first_name'],
      lastName: userData['last_name'],
      email: userData['email'],
      username: userData['username']
    }

    state.token = {
      accessToken: headers['access-token'],
      client: headers.client,
      uid: headers.uid
    }
    state.isLoading = false
    state.signedIn = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.user = {}
    state.token = {}
    state.signedIn = false
  },
  [REFRESH_TOKEN]: (state, { headers }) => {
    const newToken = headers['access-token']

    state.token = {
      accessToken: newToken.length < 1 ? state.token.accessToken : newToken,
      client: headers.client,
      uid: headers.uid
    }
  }
}
