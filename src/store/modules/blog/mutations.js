import { FETCH_ENTRIES, FETCH_ENTRY } from './action-types'

export default {
  [FETCH_ENTRIES]: (state, { data }) => {
    state.entriesList = data
  },
  [FETCH_ENTRY]: (state, { data }) => {
    state.entry = data.data
  }
}
