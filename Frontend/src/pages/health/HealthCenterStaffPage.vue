<template>
  <div>
    <health-center-staff-tabs 
      :cardInfos="cardInfos"
    />

    <q-page-sticky position="bottom-left" :offset="[18, 18]" v-if="isMobile">
      <q-fab
        icon="mdi-chevron-right"
        active-icon="mdi-chevron-left"
        color="secondary"
        padding="10px"
        @click="toggleDrawer"
        />
    </q-page-sticky>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import HealthCenterStaffTabs from '../../components/health/HealthCenterStaffTabs.vue'

export default {
  name: "HealthCenterPage",
  components: {
    HealthCenterStaffTabs
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
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "İsmail Sergen Göçmen",
          21802918,
        ]
      }
    ];

    const fabPos = ref([ 18, 18 ]);

    return {
      toggleDrawer,
      isMobile,
      cardInfos,
      fabPos
    }
  },
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none
</style>
