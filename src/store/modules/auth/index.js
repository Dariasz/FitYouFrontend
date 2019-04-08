import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  token: {
    accessToken: '',
    client: '',
    uid: ''
  },
  user: {
    id: '',
    signedIn: false,
    email: '',
    password: '',
    username: '',
    firstName: '',
    lastName: '',
    errorFlag: false,
    spinner: false
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
