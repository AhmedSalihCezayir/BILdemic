<template>
<div>
  <q-dialog v-model="showErrorMessage" seamless position="top">
    <q-card style="width: 300px" class="bg-secondary">
      <q-card-section>
        <q-banner dense inline-actions class="text-white bg-secondary" >
          <div class="row justify-center">
          {{ $t("IncorrectPassword") }}
          </div>
        </q-banner>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn 
          color="secondary" 
          text-color="white" 
          icon="mdi-close" 
          @click="showErrorMessage = false" 
          flat
          round 
          size="md"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
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
      @click.prevent="signIn(mail, password)"
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
</div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import useAuth from "../../hooks/useAuth.js"

export default {
  name: "LoginForm",

  setup() {
    const mail = ref('');
    const password = ref('');
    const show = ref(false);
    const showErrorMessage = ref(false);

    const { signInWithEmailAndPassword, auth } = useAuth();
    const router = useRouter();
    
    const signIn = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push('/home');
      })
      .catch((error) => {
        // mail.value = '';
        // password.value = '';
        showErrorMessage.value = true
      });
  }

    return {
      mail,
      password,
      show,
      signIn,
      showErrorMessage
    }
  },
}
</script>