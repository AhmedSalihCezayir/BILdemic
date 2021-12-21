<template>
  <div class="q-pa-xl column items-center">
    <div class="fixed-top-right q-mt-md q-mr-md column items-center">
      <q-btn 
        :label="$t('Register')" 
        color="secondary"
        class = "q-mb-md"
        unelevated
        to="/auth/register"
      />
      <language-switcher />
    </div>

    <q-img 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
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
