<template>
  <v-card class="mx-auto" variant="outlined" v-if="getRouteInfo.isCalc">
    <template v-slot:title> Total Route Info </template>

    <v-card-item>
      <div class="text-subtitle-2 mb-1">
        Total route length : {{ getRouteInfo.kilometers }} kilometers
      </div>
      <div class="text-subtitle-2 mb-1">
        Total route time : {{ getRouteInfo.hours }} hours
      </div>
      <div class="text-subtitle-2 mb-1">
        Average boarding time of passengers :
        {{ getRouteInfo.averageBoardingTime }} minutes
      </div>
    </v-card-item>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TotalRouteInfo',
  computed: {
    ...mapGetters(['getRouteInfo']),
  },
}
</script>
