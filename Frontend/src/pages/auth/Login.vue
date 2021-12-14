<template>
  <div class="q-pa-xl column items-center">
    <div class="fixed-top-right q-mt-md q-mr-md column items-center">
      <q-btn 
        :label="$t('Register')" 
        color="secondary"
        class = "q-mb-md"
        unelevated
      />
      <language-switcher />
    </div>

    <q-img 
      src="https://developer.android.com/distribute/google-play/resources/icon-design-specifications/images/rounded-corners-uniformed.png"
      width="200px"
      class="q-mb-md"
    />
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../../components/auth/LoginForm.vue"
import LanguageSwitcher from "../../components/LanguageSwitcher.vue"

export default {
  name: 'Login',

  components: {
    LoginForm,
    LanguageSwitcher
  },

  setup () {
    return {
    }
  }
}
</script>
