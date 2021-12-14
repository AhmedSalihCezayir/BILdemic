<template>
<div>
  <q-select
    v-model="locale"
    :options="options"
    dense
    outlined
    emit-value
    map-options
    options-dense
    color="secondary"
    style="width:80px"
  > 
    <template v-slot:option="scope">
      <q-item v-bind="scope.itemProps">
        <q-item-section>
          {{ scope.opt.label }}
        </q-item-section>
      </q-item>
    </template>
  </q-select>

</div>
</template>

<script>
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { watch } from 'vue'

export default {
  name: "LanguageSwitcher",

  setup () {
    const { locale } = useI18n({ useScope: 'global' });
    const $store = useStore();

    watch(locale, (newLang) => {
      console.log('here: ', $store.state.settings.language);
      $store.commit('settings/setLanguage',newLang);
      localStorage.setItem('language', newLang);
    })

    return {
      locale,
      options: [
        { value: 'en-US', label: 'EN', src: '~assets/flags/flag_en.svg' },
        { value: 'tr', label: 'TR', src: '~assets/flags/flag_tr.svg' }
      ]
    }
  }
}
</script>