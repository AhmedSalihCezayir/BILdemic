<template>
  <q-form style="width: 410px" class="q-pa-md">
    <q-input 
      :label="$t('Email')" 
      v-model="mail"
      color="secondary"
      :rules="[val => !!val]"
    >
      <template v-slot:prepend> 
        <q-icon name="mdi-account" />
      </template>
    </q-input>
    
    <q-input
      :type="show ? 'text' : 'password'"
      :label="$t('Password')" 
      v-model="password" 
      color="secondary"
      :rules="[val => !!val]"
      > 
      <template v-slot:prepend> 
        <q-icon name="mdi-lock"/>
      </template>

      <template v-slot:append>
        <q-icon
          v-if="password.length > 0"
          :name="show ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="show = !show"
          >
        </q-icon>
      </template>
    </q-input>

    <q-btn 
      :label="$t('SignInUpperCase')" 
      color="secondary" 
      unelevated 
      no-caps
      align="center"
      style="width: 80%;"
    />

    <q-btn 
      :label="`${$t('ForgotPassword')}?`" 
      color="secondary" 
      flat 
      align="center"
      style="width: 20%;"
      no-caps
    />

  </q-form>
</template>

<script>
import { ref } from "vue"

export default {
  name: "LoginForm",

  setup() {
    let mail = ref('');
    let password = ref('');
    let show = ref(false);

    return {
      mail,
      password,
      show
    }
  },
}
</script>