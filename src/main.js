import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store/index'
import router from './router'

const app = createApp(App).use(vuetify).use(store).use(router)

app.mount('#app')
