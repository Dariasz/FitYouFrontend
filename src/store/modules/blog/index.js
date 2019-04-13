import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  entriesList: [],
  entry: {
    title: '',
    userId: '',
    content: '',
    images: ''
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
