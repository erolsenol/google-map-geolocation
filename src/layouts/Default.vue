<template>
  <v-layout>
    <AppHeader />
    <NavigationDrawer />
    <router-view></router-view>
    <v-snackbar
      v-model="$store.state.snackbar.state"
      :color="$store.state.snackbar.color"
      timeout="2000"
    >
      {{ $store.state.snackbar.text }}
    </v-snackbar>
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
  data() {
    return {
      snackbar: false,
      timeout: 3000,
    }
  },
}
</script>
