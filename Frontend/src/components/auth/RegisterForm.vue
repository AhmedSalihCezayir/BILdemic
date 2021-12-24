<template>
<div class="full-width column items-center">
  <q-dialog v-model="showRegisterOkMessage" seamless position="top">
      <q-card style="width: 300px" class="bg-secondary">
        <q-card-section>
          <q-banner dense inline-actions class="text-white bg-secondary" >
            <div class="row justify-center">
            {{ $t("RegisterDone") }}
            </div>
          </q-banner>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showEmptySlotsError" seamless position="top">
      <q-card style="width: 300px" class="bg-negative">
        <q-card-section>
          <q-banner dense inline-actions class="text-white bg-negative" >
            <div class="row justify-center">
            {{ $t("EmptySlotsError") }}
            </div>
          </q-banner>
        </q-card-section>
      </q-card>
    </q-dialog>

  <q-form :class="`${formStyling} greedy`" :style="isMobile ? 'width: 90%' : 'width: 60%'">
    <div class="column q-gutter-y-sm">
    <div v-if="!isMobile" class="row">
      <q-input 
        :label="$t('FullName')" 
        filled
        square
        v-model="name"
        class="col-8 q-mr-md"
        color="secondary"
        :disable="loading"
        :rules="[ val => val && val.length > 0]"
      />

      <q-select
        :label="$t('Role')" 
        filled
        square
        v-model="role"
        class="col"
        color="secondary"
        :options="roleOptions"
        :disable="loading"
        emit-value
        map-options
      />
    </div>

    <!--- These two is rendered only in small screens TODO --->
    <q-input 
      v-if="isMobile"
      :label="$t('FullName')" 
      filled
      square
      v-model="name"
      class="col"
      color="secondary"
      :disable="loading"
      :rules="[ val => val && val.length > 0]"
    />

    <q-select
      v-if="isMobile"
      :label="$t('Role')"
      filled
      square
      v-model="role"
      class="col q-mb-md q-mt-xs"
      color="secondary"
      :options="roleOptions"
      :disable="loading"
    />

    <q-input 
      :label="$t('ID')" 
      filled
      square
      v-model="id"
      color="secondary"
      :disable="loading"
      :rules="[ val => val && val.length > 0]"
    />

    <q-input 
      :label="$t('Email')" 
      filled
      square
      type="email"
      v-model="mail"
      color="secondary"
      :disable="loading"
      lazy-rules
      :rules="[emailRuleValidity, emailRuleSchool]"
    />

    <q-input 
      :label="$t('HESCode')" 
      filled
      square
      v-model="hes"
      color="secondary"
      :disable="loading"
      mask="####-####-##"
      :rules="[ val => val]"
    />

    <div class="row" v-if="role == 'Student'">
      <q-checkbox
        class="bg-grey-2 text-grey-8 q-pa-sm q-mr-md q-mb-lg text-body2 col-8"
        :label="$t('ResideInDorm')"
        color="secondary"
        keep-color
        v-model="resideInDorm"
        :disable="loading"
      />

      <q-select
        :disable="!resideInDorm || loading"
        :label="$t('DormNumber')" 
        filled
        square
        v-model="dorm"
        class="col"
        color="secondary"
        :options="dormOptions" 
      />
    </div>
    
    <q-input
      :label="$t('Password')" 
      filled
      square
      :type="show ? 'text' : 'password'"
      color="secondary"
      v-model="password"
      :disable="loading"
      :rules="[ val => val && val.length >= 8 || $t('ShortPasswordError')]"
    >
      <template v-slot:append>
        <q-icon
          :name="show ? 'visibility' : 'visibility_off'"
          class="cursor-pointer"
          @click="show = !show"
          >
        </q-icon>
      </template>
    </q-input>
    </div>
    <q-btn 
      :label="$t('CreateAccount')" 
      color="secondary" 
      unelevated 
      align="center"
      class="q-mt-sm"
      :style="isMobile ? 'width: 50%' : 'width: 30%'"
      @click.prevent="register(name, mail, password, role, '', '', hes, id, resideInDorm, '')"
      :disable="loading"
      />
  </q-form>
</div>
</template>

<script>
import { ref, computed } from "vue"
import LoginManager from "../../classes/LoginManager"
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: "RegisterForm",
  props: {
    isMobile: Boolean
  },
  setup(props) {
    const router = useRouter();
    const { t } = useI18n({})

    const name = ref('');
    const role = ref('');
    const id = ref('');
    const mail = ref('');
    const hes = ref('');
    const resideInDorm = ref(false);
    const dorm = ref(null);
    const password = ref('');
    const show = ref(false);

    const showRegisterOkMessage = ref(false);
    const showEmptySlotsError = ref(false);
    const loading = ref(false);

    const lm = LoginManager.getInstance();
    
    const roleOptions = [
      {
        label: t('Student'),
        value: 'Student'
      },
      {
        label: t('Instructor'),
        value: 'Instructor'
      },
      {
        label: t('DiagnovirTester'),
        value: 'DiagnovirTester'
      },
      {
        label: t('CafeteriaStaff'),
        value: 'CafeteriaStaff'
      },
      {
        label: t('SportsCenterStaff'),
        value: 'SportsCenterStaff'
      },
      {
        label: t('HealthCenterStaff'),
        value: 'HealthCenterStaff'
      }
    ];

    const emailRuleSchool = (val) => {
      // if (role.value == "Student") {
      //   return val.includes('@ug.bilkent.edu.tr') || t('UseUniversityMailError1');
      // }
      // else if (role.value == "Instructor") {
      //   return val.includes('@fen.bilkent.edu.tr') 
      //         || val.includes('@cs.bilkent.edu.tr')
      //         || val.includes('@bilkent.edu.tr') 
      //         || val.includes('@ee.bilkent.edu.tr')
      //         || t('UseUniversityMailError2');
      // }
      // else {
      //   return val.includes('@bilkent.edu.tr') || t('UseUniversityMailError2');
      // } 
    }

    const emailRuleValidity = (val) => {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || t('InvalidMail');
    }

    const dormOptions = [
      50, 51, 52, 54, 55, 60, 61, 62, 63, 64, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 90, 91, 92, 93
    ];

    const formStyling = computed(() => {
      return props.isMobile ? "q-gutter-md" : "q-pa-md q-gutter-md";
    })

    const register = async (name, mail, password, role, address, phone, hes, id, resideInDorm, roomMateNames) => {
      if (inputValidity(name, mail, password, role.value, phone, hes, id)) {
        lm.createUser(name, mail, password, role.value, address, phone, hes, id, resideInDorm, roomMateNames).then(() => {
        showRegisterOkMessage.value = true;
        loading.value = true;
        setTimeout(() => {
          showRegisterOkMessage.value = false;
          router.push('/auth/login');
          }, 4000)
        });
      }
      else {
        showEmptySlotsError.value = true;
        setTimeout(() => {
          showEmptySlotsError.value = false;
        }, 4000)
      }
      
    }

    const inputValidity = (name, mail, password, role, phone, hes, id) => {
      if (password.length < 8) {
        return false;
      }
      else if (name === '' || mail === '' || role === '' || phone === '', hes === '', id === null) {
        return false;
      }
      else {
        return true;
      }
    }
    
    return {
      formStyling,
      name,
      role,
      id,
      mail,
      hes,
      password,
      show,
      resideInDorm,
      roleOptions,
      dorm,
      dormOptions,
      emailRuleSchool,
      emailRuleValidity,
      register,
      showRegisterOkMessage,
      showEmptySlotsError,
      loading
    }
  },
}
</script>