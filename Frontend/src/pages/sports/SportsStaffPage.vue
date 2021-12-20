<template>
  <div :style="pageStyling"> 

    <q-page-sticky position="bottom-left" :offset="fabPos" v-if="isMobile">
      <q-fab
        icon="mdi-chevron-right"
        active-icon="mdi-chevron-left"
        color="secondary"
        padding="10px"
        @click="toggleDrawer"
      >
      </q-fab>
    </q-page-sticky>

    <sports-reservations-staff 
      :cardInfos="cardInfos"
      class="q-pt-md"/>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import SportsReservationsStaff from '../../components/sports/SportsReservationsStaff.vue'

export default {
  name: "SportsStaffPage",
  components: {
    SportsReservationsStaff
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

    const cardInfos = [
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Ahmed Salih Cezayir",
          21802918,
          "Normal"
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Asude Cezayir",
          21802918,
          "Vegan"
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "İsmail Sergen Göçmen",
          21802918,
          "Vegeterian"
        ]
      }
    ];

    const fabPos = ref([ 18, 18 ])

    return {
      toggleDrawer,
      pageStyling,
      isMobile,
      hasReservation,
      cardInfos,
      fabPos,
    }
  },
}
</script>
