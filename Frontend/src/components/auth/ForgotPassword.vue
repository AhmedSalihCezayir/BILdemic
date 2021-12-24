<template>
<div>
  <q-dialog v-model="showErrorMessage" seamless position="top">
    <q-card style="width: 300px" class="bg-negative">
      <q-card-section>
        <q-banner dense inline-actions class="text-white bg-negative" >
          <div class="row justify-center">
          {{ $t("PasswordResetError") }}
          </div>
        </q-banner>
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="showResetMailSent" seamless position="top">
    <q-card style="width: 300px" class="bg-positive">
      <q-card-section>
        <q-banner dense inline-actions class="text-white bg-positive" >
          <div class="row justify-center">
          {{ $t("PasswordResetSent") }}
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

    <q-btn 
      :label="$t('ResertPassword')" 
      color="secondary" 
      unelevated 
      no-caps
      align="center"
      style="width: 80%;"
      @click.prevent="reset(mail)"
    />

    <q-btn 
      :label="$t('Back')" 
      flat
      class="text-secondary"
      unelevated 
      no-caps
      align="center"
      style="width: 20%;"
      @click.prevent="goBack"
    />
  </q-form>
</div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import LoginManager from "../../classes/LoginManager"

export default {
  name: "ForgotPassword",

  setup(props, ctx) {
    const mail = ref('');
    const password = ref('');
    const showResetMailSent = ref(false);
    const showErrorMessage = ref(false);

    const router = useRouter();
    
    const goBack = () => {
      ctx.emit('goBack');
    }

    const lm = LoginManager.getInstance();

    const reset = async (email) => {
      lm.resetPassword(email)
        .then((userCredential) => {
          showResetMailSent.value = true;
          setTimeout(() => {
            showResetMailSent.value = false;
          }, 4000);
          router.push('/auth/login');
        })
        .catch((error) => {
          showErrorMessage.value = true;
          setTimeout(() => {
            showErrorMessage.value = false;
          }, 4000);
        });
    }

    return {
      mail,
      password,
      reset,
      showResetMailSent,
      showErrorMessage,
      goBack
    }
  },
}
</script>