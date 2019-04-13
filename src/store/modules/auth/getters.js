export default {
  isAuthenticated: state => !!state.token.accessToken.length,
  authStatus: state => state.signedIn,
  user: state => state.user
}
