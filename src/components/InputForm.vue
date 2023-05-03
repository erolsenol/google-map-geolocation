<template>
  <div class="form-container d-flex flex-column">
    <span class="text-h6 my-3">Data Entry Form</span>
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
      passengers: [],
    }
  },
  methods: {
    routeCreateSuccess(result, status) {
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

          const routeDetailData = {
            legs: result.routes[0].legs,
            waypoint_order: result.routes[0].waypoint_order,
          }
          this.passengersRouteDetailCalc(routeDetailData)
        }
      } else if (status == 'ZERO_RESULTS') {
        this.$store.commit('showSnackbar', {
          color: 'red-accent-2',
          text: 'Route not found',
        })
      }
    },
    passengersRouteDetailCalc({ legs, waypoint_order }) {
      console.log(legs)
      console.log(waypoint_order)

      waypoint_order.forEach((order, index) => {
        this.passengers[index].pickUpPointOrder = order
      })

      this.passengers.sort((a, b) => a.pickUpPointOrder - b.pickUpPointOrder)

      let totalTime = 0

      this.passengers.forEach((pass, index) => {
        const tripTimeMinute = (legs[index].duration.value / 60).toFixed(2)
        totalTime += Number(tripTimeMinute)
        this.passengers[index].tripDuration = totalTime
      })

      this.$store.commit('setPassengers', this.passengers)
    },
    formSubmit() {
      let routeData = null

      if (this.jsonData) {
        const isJsonResult = this.isJson(this.jsonData)
        if (!isJsonResult) {
          this.$store.commit('showSnackbar', {
            color: 'red-accent-2',
            text: 'Json Parse Error',
          })
          return
        }
        routeData = isJsonResult
      } else {
        routeData = mockData
      }

      this.origin = this.googleMap.newLatLng(routeData.origin)
      this.destination = this.googleMap.newLatLng(routeData.destination)
      this.passengers = routeData.passengers

      const waypoints = routeData.passengers.map((pass) => ({
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

      if (this.passengers.length > 9) {
        this.$store.commit('showSnackbar', {
          color: 'yellow-lighten-2',
          text: 'Input has passengers of more than 9',
        })
      }
    },
    totalWayCalc(legs) {
      const totalDistance = legs.reduce((a, b) => a + b.distance.value, 0)
      const totalDuration = legs.reduce((a, b) => a + b.duration.value, 0)

      this.$store.commit('setRouteInfo', {
        kilometers: (totalDistance / 1000).toFixed(2),
        hours: (totalDuration / 3600).toFixed(2),
      })

      if (totalDuration > 7200) {
        this.$store.commit('showSnackbar', {
          color: 'yellow-lighten-2',
          text: 'Route duration from start to finish is over 2 hours',
        })
      }
    },

    isJson(str) {
      try {
        const result = JSON.parse(str)
        return result
      } catch (e) {
        return false
      }
    },
  },
}
</script>
