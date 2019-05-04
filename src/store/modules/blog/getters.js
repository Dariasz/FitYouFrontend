export default {
  entriesList: state => state.entriesList,
  findEntry: state => (id) => state.entriesList.find(entry => entry.id === id),
  entry: state => state.entry
}
