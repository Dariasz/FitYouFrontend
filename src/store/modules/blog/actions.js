import { CREATE_ENTRY, FETCH_ENTRIES, FETCH_ENTRY } from './action-types'
import { REFRESH_TOKEN } from '../auth/action-types'
import api from '../../../api/index'

export default {
  [FETCH_ENTRIES]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      api.get('blog/entries').then((response) => {
        commit(FETCH_ENTRIES, response)
        resolve(response)
      })
    })
  },

  [FETCH_ENTRY]: ({ commit, dispatch }, id) => {
    return new Promise((resolve, reject) => {
      api.get(`blog/entries/${id}`).then((response) => {
        commit(FETCH_ENTRY, response)
        resolve(response)
      })
    })
  },

  [CREATE_ENTRY]: ({ commit, dispatch }, entry) => {
    return new Promise((resolve, reject) => {
      api.post('blog/entries', entry).then((response) => {
      })
    })
  }
}
