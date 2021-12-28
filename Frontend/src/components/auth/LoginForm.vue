<template>
<div>
  <q-dialog v-model="showErrorMessage" seamless position="top">
    <q-card style="width: 300px" class="bg-negative">
      <q-card-section>
        <q-banner dense inline-actions class="text-white bg-negative" >
          <div class="row justify-center">
          {{ $t("IncorrectPassword") }}
          </div>
        </q-banner>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="notVerifiedError" seamless position="top">
    <q-card style="width: 300px" class="bg-negative">
      <q-card-section>
        <q-banner dense inline-actions class="text-white bg-negative" >
          <div class="row justify-center">
          {{ $t("NotVerifiedError") }}
          </div>
        </q-banner>
      </q-card-section>
    </q-card>
  </q-dialog>
  
  <q-form style="width: 410px" class="q-py-md">
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
      :type="show ? '' : 'password'"
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
      @click="forgot"
    />

  </q-form>
</div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from 'vuex'
import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth"
import LoginManager from "../../classes/LoginManager"

export default {
  name: "LoginForm",

  setup(props, ctx) {
    const mail = ref('');
    const password = ref('');
    const show = ref(false);
    const showErrorMessage = ref(false);
    const notVerifiedError = ref(false);

    const router = useRouter();
    const $store = useStore();

    const forgot = () => {
      ctx.emit('forgot');
    }

  // onAuthStateChanged(getAuth(), (user) => {
  //   console.log('here: ', user);
  // })

    const lm = LoginManager.getInstance();

    const signIn = async (email, password) => { 
      lm.signIn(email, password)
        .then(async (userCredential) => {
          if (!userCredential.user.emailVerified) {
            await lm.logout();
            notVerifiedError.value = true;
            setTimeout(() => {
              notVerifiedError.value = false;
            }, 4000);
          }
          else {
            $store.commit('settings/setCurrentUserRole', lm.getCurrentUserRole());
            $store.commit('settings/setCurrentUserUID', userCredential.user.uid);
            router.push('/home');
          }  
        })
        .catch((error) => {
          // mail.value = '';
          // password.value = '';
          showErrorMessage.value = true;
          setTimeout(() => {
            showErrorMessage.value = false;
          }, 4000);
        });
        }

    return {
      mail,
      password,
      show,
      signIn,
      showErrorMessage,
      forgot,
      notVerifiedError
    }
  },
}
</script>