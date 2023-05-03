<template>
  <div class="form-container d-flex flex-column">
    <span class="text-h6 my-3">Data Input Form</span>
    <v-textarea variant="outlined" v-model="jsonData"></v-textarea>
    <v-btn @click="formSubmit" variant="outlined"> Button </v-btn>
  </div>
</template>

<script>
import mockData from '../mockData/data.json'
export default {
  name: 'InputForm',
  inject: ['googleMap'],
  data() {
    return {
      jsonData: null,
      travelMode: 'DRIVING',
      origin: null,
      destination: null,
    }
  },
  methods: {
    routeCreateSuccess(result, status) {
      console.log(result)
      this.$store.state.snackbarState = true
      if (status == 'OK') {
        this.googleMap.directionsRenderer.setDirections(result)

        this.$store.commit('setOriginOrDestination', {
          setName: 'origin',
          ...this.origin,
        })
        this.$store.commit('setOriginOrDestination', {
          setName: 'destination',
          ...this.destination,
        })
        if (result.routes.length > 0) {
          this.totalWayCalc(result.routes[0].legs)
        }
      }
    },
    formSubmit() {
      try {
        this.origin = this.googleMap.newLatLng(mockData.origin)
        this.destination = this.googleMap.newLatLng(mockData.destination)
        const waypoints = mockData.passengers.map((pass) => ({
          location: { lat: pass.pickUpPoint.lat, lng: pass.pickUpPoint.lng },
        }))

        const request = {
          origin: this.origin,
          destination: this.destination,
          travelMode: this.travelMode,
          waypoints: waypoints,
          optimizeWaypoints: true,
        }
        this.googleMap.directionsService.route(request, this.routeCreateSuccess)
      } catch (error) {
        console.log(error)
      }
    },
    totalWayCalc(legs) {
      const totalDistance = legs.reduce((a, b) => a + b.distance.value, 0)
      const totalDuration = legs.reduce((a, b) => a + b.duration.value, 0)

      this.$store.commit('setRouteInfo', {
        kilometers: (totalDistance / 1000).toFixed(2),
        hours: (totalDuration / 3600).toFixed(2),
      })
    },
  },
}
</script>
