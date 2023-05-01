<template>
  <div class="form-container d-flex flex-column">
    <span class="text-h6 my-3">Data Input Form</span>
    <v-textarea variant="outlined" v-model="jsonData"></v-textarea>
    <v-btn @click="formSubmit" variant="outlined"> Button </v-btn>
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      jsonData: null,
    }
  },
  methods: {
    formSubmit() {
      try {
        const parseJson = JSON.parse(this.jsonData)
        console.log(parseJson)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
