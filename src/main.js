import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store/index";

createApp(App).use(vuetify).use(store).mount("#app");
