import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDataTable } from 'vuetify/labs/VDataTable'

const vuetify = createVuetify({
  components: { ...components, VDataTable },
  directives,
})

export default vuetify
