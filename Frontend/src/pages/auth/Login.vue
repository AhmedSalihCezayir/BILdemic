<template>
  <div class="q-pa-xl column items-center">
    <q-btn 
      :label="$t('Register')" 
      class="fixed-top-right"
      color="secondary q-ma-md"
      unelevated
      />
    <q-img 
      src="https://developer.android.com/distribute/google-play/resources/icon-design-specifications/images/rounded-corners-uniformed.png"
      width="200px"
      class="q-mb-md"/>
    <login-form />
  </div>
</template>

<script>
import LoginForm from "../../components/auth/LoginForm.vue"

export default {
  name: 'Login',

  components: {
    LoginForm
  },

  setup () {
    return {
    }
  }
}
</script>
