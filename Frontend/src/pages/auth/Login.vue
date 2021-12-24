<template>
  <div class="q-pa-xl column items-center">
    <q-card class="column items-center q-pa-xl">
      <q-img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
        width="200px"
        class="q-mb-md"
      />
      <login-form v-if="!showForgot" @forgot="showForgot = true"/>
      <forgot-password @goBack="showForgot = false" v-else/>
      <q-btn 
          v-if="!showForgot"
          :label="$t('Register')" 
          color="secondary"
          class = "q-mb-md full-width q-mx-md"
          unelevated
          to="/auth/register"
        />
      <language-switcher v-if="!showForgot"/>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue"
import LoginForm from "../../components/auth/LoginForm.vue"
import ForgotPassword from "../../components/auth/ForgotPassword.vue"
import LanguageSwitcher from "../../components/LanguageSwitcher.vue"

export default {
  name: 'Login',

  components: {
    LoginForm,
    LanguageSwitcher,
    ForgotPassword
  },

  setup () {
    const showForgot = ref(false);

    return {
      showForgot
    }
  }
}
</script>
