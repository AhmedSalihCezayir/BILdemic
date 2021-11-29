import { createApp } from "vue"
import App from "./App.vue"
import { store } from "./storage/store.js"
import { router } from "./router/router.js"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");