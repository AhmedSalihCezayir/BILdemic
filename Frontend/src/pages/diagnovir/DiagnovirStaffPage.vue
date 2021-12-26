<template>
  <div> 
    <diagnovir-reservations-staff 
      :cardInfos="cardInfos"
      class="q-pt-md"
    />
    <q-page-sticky position="bottom-left" :offset="fabPos" v-if="isMobile">
      <q-fab
        icon="mdi-chevron-right"
        active-icon="mdi-chevron-left"
        color="secondary"
        padding="10px"
        @click="toggleDrawer" />
    </q-page-sticky>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import DiagnovirReservationsStaff from '../../components/diagnovir/DiagnovirReservationsStaff.vue'

export default {
  name: "DiagnovirStaffPage",
  components: {
    DiagnovirReservationsStaff
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

    const cardInfos = [
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Ahmed Salih Cezayir",
          21802918,
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Asude Cezayir",
          21802918,
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "İsmail Sergen Göçmen",
          21802918,
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Ahmed Salih Cezayir",
          21802918,
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Asude Cezayir",
          21802918,
        ]
      }
    ];

    const fabPos = ref([ 18, 18 ])

    return {
      toggleDrawer,
      isMobile,
      hasReservation,
      cardInfos,
      fabPos,
    }
  },
}
</script>
