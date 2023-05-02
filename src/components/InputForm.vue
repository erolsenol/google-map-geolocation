<template>
  <div class="form-container d-flex flex-column">
    <span class="text-h6 my-3">Data Input Form</span>
    <v-textarea variant="outlined" v-model="jsonData"></v-textarea>

    <v-text-field
      label="Lat"
      variant="outlined"
      v-model.number="lat"
    ></v-text-field>
    <v-text-field
      label="Lng"
      variant="outlined"
      v-model.number="lng"
    ></v-text-field>
    <v-text-field label="Name" variant="outlined" v-model="name"></v-text-field>
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
      name: '',
      lat: 41.0,
      lng: 29.2,
      jsonData: null,
      travelMode: 'DRIVING',
      origin: null,
      destination: null,
    }
  },
  methods: {
    routeCreateSuccess(result, status) {
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
      }
    },
    formSubmit() {
      try {
        this.origin = this.googleMap.newLatLng(mockData.origin)
        this.destination = this.googleMap.newLatLng(mockData.destination)

        const request = {
          origin: this.origin,
          destination: this.destination,
          travelMode: this.travelMode,
        }
        this.googleMap.directionsService.route(request, this.routeCreateSuccess)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
