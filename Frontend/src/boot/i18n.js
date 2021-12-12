import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'
import { Store } from '../store/index.js'

let i18n;

export default boot(({ app }) => {
  Store.commit('settings/initialiseStore');
  
  i18n = createI18n({
    locale: Store.state.settings.language,
    messages
  })

  // Set i18n instance on app
  app.use(i18n)
})

export { i18n }
