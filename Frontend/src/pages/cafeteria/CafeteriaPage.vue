<template>
  <div> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('CafeteriaPageDesc') }} </b> 
    </q-banner>

    <daily-menu class="q-mt-lg"/>

    <my-reservations 
      v-if="hasReservation" 
      :slots="slots" 
      :title="$t('MealOrderInfo')"
      class="q-mt-md" />
      
    <make-reservation 
      v-if="!hasReservation" 
      :hasMeal="true"
      :hasPlace="true" 
      :hasTime="true"
      :hasDate="true"
      :title="$t('MakeMealOrder')" 
      type="meal"
      class="q-mt-md" @makeReservation="makeRes"/>

  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import MakeReservation from '../../components/reservation/MakeReservation.vue'
import MyReservations from '../../components/reservation/MyReservations.vue'
import DailyMenu from '../../components/cafeteria/DailyMenu.vue'
import CafeteriaManager from '../../classes/CafeteriaManager'

export default {
  name: "CafeteriaPage",
  components: {
    MakeReservation,
    MyReservations,
    DailyMenu
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

    const hasReservation = ref(false);
    const cm = CafeteriaManager.getInstance();

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const makeRes = async (val) => {
      await cm.createMealOrder(val.place, val.date, val.time, val.meal);
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
