<template>
  <v-main class="main-content">
    <v-container fluid class="home-container">
      <v-row>
        <v-col cols="12" md="6"> <InputForm /> </v-col>
        <v-col cols="12" md="6"> <GoogleMapLoader /> </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import GoogleMapLoader from '@/components/GoogleMapLoader.vue'
import InputForm from '@/components/InputForm.vue'
export default {
  name: 'HomePage',
  components: { GoogleMapLoader, InputForm },
}
</script>

<style></style>
