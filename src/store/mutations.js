export default {
  increment(state) {
    state.count++
  },
  setMapMarkers(state, { name, lat, lng }) {
    state.mapMarkers.push({ name, lat, lng })
  },
  setOriginOrDestination(state, { setName, lat, lng }) {
    state[setName] = { lat, lng }
  },
}
