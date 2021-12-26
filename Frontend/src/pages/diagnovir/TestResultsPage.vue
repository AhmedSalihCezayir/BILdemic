<template>
  <div class="q-gutter-y-md">
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('TestsPageDesc') }} </b> 
    </q-banner>

    <test-result v-for="data in datas" :key="data" :data="data" />
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import TestResult from '../../components/reservation/TestResult.vue'

export default {
  name: "TestResultsPage",
  components: {
    TestResult
  },
  computed: {
    datas() {
      return [
        {
          date: '11/12/2021',
          time: '08.30',
          place: 'Health Center',
          result: 'positive'
        },
        {
          date: '10/12/2021',
          time: '08.30',
          place: 'Health Center',
          result: 'negative'
        },
        {
          date: '09/12/2021',
          time: '08.30',
          place: 'Health Center',
          result: 'negative'
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

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    return {
      toggleDrawer,
      isMobile
    }
  },
}
</script>
