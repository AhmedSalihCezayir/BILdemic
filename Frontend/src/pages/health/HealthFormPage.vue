<template>
  <div :style="pageStyling"> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('PatientForm') }} </b> 
    </q-banner>
    
    <div class="row justify-center q-mt-lg">
      <healt-form />
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import HealtForm from '../../components/health/HealthForm.vue'

export default {
  name: "HealthCenterPage",
  components: {
    HealtForm
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

    watch(isMobile, () => {
      open.value = !isMobile.value;
    })

    const hasReservation = ref(true);

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
