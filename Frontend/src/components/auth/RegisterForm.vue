<template>
  <q-form :class="formStyling" :style="isMobile ? 'width: 90%' : 'width: 60%'">
    <div v-if="!isMobile" class="row">
      <q-input 
        :label="$t('FullName')" 
        filled
        square
        v-model="name"
        class="col-8 q-mr-md"
        color="secondary"
      />

      <q-select
        :label="$t('Role')" 
        filled
        square
        v-model="role"
        class="col"
        color="secondary"
        :options="roleOptions"
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
    />

    <q-select
      v-if="isMobile"
      :label="$t('Role')"
      filled
      square
      v-model="role"
      class="col"
      color="secondary"
      :options="roleOptions"
    />

    <q-input 
      :label="$t('ID')" 
      filled
      square
      v-model="id"
      color="secondary"
    />

    <q-input 
      :label="$t('Email')" 
      filled
      square
      type="email"
      v-model="mail"
      color="secondary"
    />

    <q-input 
      :label="$t('HESCode')" 
      filled
      square
      v-model="hes"
      color="secondary"
    />

    <div class="row" v-if="role == $t('Student')">
      <q-checkbox
        class="bg-grey-2 text-grey-8 q-pa-sm q-mr-md text-body2 col-8"
        :label="$t('ResideInDorm')"
        color="secondary"
        keep-color
        v-model="resideInDorm"
      />

      <q-select
        :disable="!resideInDorm"
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

    <q-btn 
      :label="$t('CreateAccount')" 
      color="secondary" 
      unelevated 
      align="center"
      :style="isMobile ? 'width: 50%' : 'width: 30%'"
      />

  </q-form>
</template>

<script>
import { ref } from "vue"

export default {
  name: "RegisterForm",
  props: {
    isMobile: Boolean
  },
  computed: {
    formStyling() {
      return this.isMobile ? "q-gutter-md" : "q-pa-md q-gutter-md";
    },
    roleOptions() {
      return [
          this.$t('Student'), this.$t('Instructor'), this.$t('DiagnovirTester'), this.$t('CafeteriaStaff'), this.$t('SportsCenterStaff'), this.$t('HealthCenterStaff')
        ];
    }
  },
  setup() {
    let name = ref('');
    let role = ref('');
    let id = ref(null);
    let mail = ref('');
    let hes = ref('');
    let resideInDorm = ref(false);
    let dorm = ref(null);
    let password = ref('');

    let show = ref(false);
    
    return {
      name,
      role,
      id,
      mail,
      hes,
      password,
      show,
      resideInDorm,
      dormOptions: [
        50, 51, 52, 54, 55, 60, 61, 62, 63, 64, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 81, 82, 90, 91, 92, 93
      ],
      dorm
    }
  },
}
</script>