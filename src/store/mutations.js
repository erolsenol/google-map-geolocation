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
  setPassengers(state, passengers) {
    state.passengers = passengers
  },
  enrichedPassengers(state, passengers) {
    state.passengers = passengers
  },
  showSnackbar(state, { color = 'dark', text }) {
    state.snackbar.text = text
    state.snackbar.color = color
    state.snackbar.state = true
  },
  setRouteInfo(state, { kilometers, hours }) {
    state.routeInfo.kilometers = kilometers
    state.routeInfo.hours = hours
    state.routeInfo.isCalc = true
  },
}
