<template>
  <div id="map" ref="googleMap"></div>
</template>

<script>
export default {
  name: 'GoogleMapLoader',
  inject: ['googleMap'],
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
  methods: {},
  async mounted() {
    this.googleMap.init()
  },
}
</script>

<style>
#map {
  min-height: 500px;
}
</style>
