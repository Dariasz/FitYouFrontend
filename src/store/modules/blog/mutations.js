import { FETCH_ENTRIES } from './action-types'

export default {
  [FETCH_ENTRIES]: (state, { data }) => {
    state.entriesList = data
  }
}
