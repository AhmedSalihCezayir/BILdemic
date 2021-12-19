<template>
  <div :style="pageStyling" class="q-gutter-y-md">
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('SportsReservationsPageDesc') }} </b> 
    </q-banner>

    <sports-reservations/>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import SportsReservations from '../../components/sports/SportsReservations.vue'

export default {
  name: "SportsReservationsPage",
  components: {
    SportsReservations
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

    const pageStyling = computed(() => {
      return open.value ? "width: calc(100% - 200px); margin-left: 200px;" : "";
    })

    return {
      toggleDrawer,
      pageStyling,
      isMobile
    }
  },
}
</script>
