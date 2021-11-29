import Vue from 'vue'
import '@/plugins/composition-api'
import '@/plugins/infinite-loading'
import App from './App.vue'
import '@/plugins/storage'
import '@/plugins/card-actions'
import '@/plugins/flag'
import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import store from '@/store'
import router from './router'


const app = new Vue({
  router,
  vuetify,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

export default app
