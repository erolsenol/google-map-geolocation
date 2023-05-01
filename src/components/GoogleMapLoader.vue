<template>
  <div id="map" ref="googleMap"></div>
</template>

<script>
import { Loader } from '@googlemaps/js-api-loader'

export default {
  name: 'GoogleMapLoader',
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null,
      client: null,
    }
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    },
  },
  async mounted() {
    const loader = new Loader({
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
      version: 'weekly',
    })

    loader.load().then(async () => {
      // eslint-disable-next-line no-undef
      const { Map } = await google.maps.importLibrary('maps')

      this.map = new Map(document.getElementById('map'), {
        center: { lat: 41.0, lng: 29.0 },
        zoom: 10,
      })
    })
  },
}
</script>

<style>
#map {
  min-height: 500px;
}
</style>
