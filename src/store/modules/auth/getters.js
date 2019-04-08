export default {
  isAuthenticated: state => !!state.token.accessToken.length > 0,
  authStatus: state => state.signedIn
}
