export default {
  isAuthenticated: state => !!state.token.accessToken,
  authStatus: state => state.signedIn,
  user: state => state.user,
  token: state => state.token
}
