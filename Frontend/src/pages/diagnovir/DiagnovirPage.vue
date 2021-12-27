<template>
  <div> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('DiagnovirPageDesc') }} </b> 
    </q-banner>

    <my-reservations 
      v-if="hasReservation" 
      :slots="slots" 
      :title="$t('DiagnovirAppInfo')"
      class="q-mt-xl" />

    <make-reservation 
      v-if="!hasReservation" 
      :hasDate="true" 
      :hasTime="true" 
      :title="$t('MakeDiagnovirApp')" 
      type="diagnovir"
      class="q-mt-xl" 
      @makeReservation="makeRes"/>

    <div class="column items-center q-mt-xl">
      <q-btn :label="$t('SeeTestResults')" color="secondary" style="width: 50%" to="/~/diagnovir/tests"/>
    </div>  
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import MakeReservation from '../../components/reservation/MakeReservation.vue'
import MyReservations from '../../components/reservation/MyReservations.vue'
import DiagnovirManager from '../../classes/DiagnovirManager'

export default {
  name: "DiagnovirPage",
  components: {
    MakeReservation,
    MyReservations
  },
  computed: {
    slots() {
      const dm = DiagnovirManager.getInstance();
      const data = dm.getDiagnovirReservation();

      return [
        {
          label: this.$t('ReservationDate'), 
          data:  data._date || ' '
        }, 
        {
          label: this.$t('ReservationTime'), 
          data:  data._time || ' '
        },
        {
          label: this.$t('ReservationPlace'), 
          data:  data._place || ' '
        }   
      ]
    }
  },

  setup(props, ctx) {
    const $q = useQuasar();

    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const open = ref(!isMobile.value);

    watch(isMobile, () => {
      open.value = !isMobile.value;
    })

    const dm = DiagnovirManager.getInstance();

    const hasReservation = computed(() => {
      return Object.keys(dm.getDiagnovirReservation()).length !== 0;
    });

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const makeRes = async (data) => {
      await dm.takeReservation(data.date, "B-block", data.time, "");
    } 

    return {
      toggleDrawer,
      isMobile,
      hasReservation,
      makeRes
    }
  },
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
