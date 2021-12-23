<template>
  <div> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('HealthCenterPageDesc') }} </b> 
    </q-banner>

    <div class="column items-center q-mt-xl">
      <q-btn :label="$t('CallAnAmbulance')" color="red" style="width: 50%" icon="mdi-ambulance" @click="show = true"/>
    </div>  

    <my-reservations 
      v-if="hasReservation" 
      :slots="slots" 
      :title="$t('HealthCenterAppInfo')"
      class="q-mt-xl" />

    <div v-if="hasReservation" class="column items-center q-mt-xl">
      <q-btn :label="$t('ContactHealthCenter')" color="secondary" style="width: 50%" to="/~/health/form"/>
    </div>  

    <div v-else class="row justify-center">
      <health-form class="q-mt-lg"/>
    </div>

    <q-dialog v-model="show" persistent>
      <q-card style="width: 500px">
        <q-card-section class="col items-center">
            {{ $t("CallAnAmbulanceDesc") }}
        </q-card-section>

        <q-card-actions class="justify-between">
          <q-btn flat :label="$t('Cancel')" color="secondary" v-close-popup />
          <q-btn flat :label="$t('Confirm')" color="secondary" />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import MyReservations from '../../components/reservation/MyReservations.vue'
import HealthForm from '../../components/health/HealthForm.vue'

export default {
  name: "HealthCenterPage",
  components: {
    MyReservations,
    HealthForm
  },
  computed: {
    slots() {
      return [
        {
          label: this.$t('ReservationDate'), 
          data:  '11/12/2021'
        },
        {
          label: this.$t('ReservationTime'), 
          data:  '08.30'
        },
        {
          label: this.$t('ReservationPlace'), 
          data:  'Health Center'
        }
      ]
    },
    data() {
      return {
        date: '11/12/2021',
        time: '08.30',
        place: 'Health Center',
        result: 'positive'
      }
    }

  },

  setup(props, ctx) {
    const $q = useQuasar();

    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const open = ref(!isMobile.value);

    const show = ref(false);

    watch(isMobile, () => {
      open.value = !isMobile.value;
    })

    const hasReservation = ref(true);

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    return {
      toggleDrawer,
      isMobile,
      hasReservation,
      show
    }
  },
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
