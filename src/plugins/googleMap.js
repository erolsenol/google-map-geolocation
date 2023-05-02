import { Loader } from '@googlemaps/js-api-loader'

const googleMap = {
  map: null,
  marker: null,
  directionsService: null,
  directionsRenderer: null,
  init() {
    const loader = new Loader({
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API_KEY,
      version: 'weekly',
    })

    loader.load().then(async () => {
      this.directionsService = new google.maps.DirectionsService()
      this.directionsRenderer = new google.maps.DirectionsRenderer()

      const { Map } = await google.maps.importLibrary('maps')

      this.map = new Map(document.getElementById('map'), {
        center: { lat: 41, lng: 29.2 },
        zoom: 11,
      })

      this.directionsRenderer.setMap(this.map)
    })
  },
  setMarker({ name = '', lat, lng }) {
    var myLatlng = new google.maps.LatLng(lat, lng)

    var marker = new google.maps.Marker({
      position: myLatlng,
      title: name,
    })

    marker.setMap(this.map)
    return true
  },
  newLatLng({ lat, lng }) {
    const newLocation = new google.maps.LatLng({ lat, lng })

    return newLocation
  },
}

export default googleMap
