import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import axios from 'axios'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions, axios).mount('#app')
