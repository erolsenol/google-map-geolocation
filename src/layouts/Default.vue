<template>
  <v-layout>
    <AppHeader />
    <NavigationDrawer />
    <router-view></router-view>
    <v-snackbar
      v-model="$store.state.snackbarState"
      color="black"
      timeout="2000"
    >
      {{ $store.state.snackbarText }}
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
