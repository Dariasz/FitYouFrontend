import { FETCH_ENTRIES, LOAD_ENTRIES } from './action-types'
import api from '../../../api/index'

export default {
  [FETCH_ENTRIES]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      api.get('api/blog/entries').then((response) => {
        commit(FETCH_ENTRIES, response)
        resolve(response)
      })
    })
  }
}
