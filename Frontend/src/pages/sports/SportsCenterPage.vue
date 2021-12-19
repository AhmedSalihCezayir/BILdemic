<template>
  <div :style="pageStyling"> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('SportsCenterPageDesc') }} </b> 
    </q-banner>

    <make-reservation 
      :hasPlace="true"
      :hasActivity="true" 
      :hasDate="true" 
      :hasTime="true" 
      :title="$t('MakeSportsApp')" 
      type="sports"
      class="q-mt-xl" />  

    <div class="column items-center q-mt-xl">
      <q-btn :label="$t('SeeSportsReservations')" color="secondary" style="width: 50%" to="/~/sports/reservations"/>
    </div>  

  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import MakeReservation from '../../components/reservation/MakeReservation.vue'

export default {
  name: "SportsCenterPage",
  components: {
    MakeReservation
  },
  computed: {
    slots() {
      return [
        {
          label: this.$t('ReservationPlace'), 
          data:  'Main Campus Sports Hall'
        },
        {
          label: this.$t('ReservationActivity'), 
          data:  'Tennis'
        },
        {
          label: this.$t('ReservationDate'), 
          data:  '11/12/2021'
        },
        {
          label: this.$t('ReservationTime'), 
          data:  '08.30'
        }
      ]
    },
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

    const hasReservation = ref(false);

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const pageStyling = computed(() => {
      return open.value ? "width: calc(100% - 200px); margin-left: 200px;" : "";
    })

    return {
      toggleDrawer,
      pageStyling,
      isMobile,
      hasReservation
    }
  },
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
