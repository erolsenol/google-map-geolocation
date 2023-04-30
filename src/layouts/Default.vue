<template>
  <v-layout>
    <AppHeader />

    <NavigationDrawer />

    <router-view></router-view>
  </v-layout>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    NavigationDrawer,
  },
}
</script>
