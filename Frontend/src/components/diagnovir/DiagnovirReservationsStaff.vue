<template>
  <div class="column items-center">
    <div style="width: 40%" class="q-gutter-y-md col-4">
      <q-select v-model="date" color="secondary" outlined :label="$t('Date')" dense/>
      <q-select v-model="time" color="secondary" outlined :label="$t('Time')" dense/>
      <q-input
        v-model="search"
        debounce="1000"
        outlined
        dense
        :placeholder="$t('Search')"
        color="secondary"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>

    <q-scroll-area class="full-width q-mt-md" style="height: 450px" >
      <div class="column q-gutter-y-md full-width items-center">
        <generic-user-card 
          v-for="info in cardInfos" 
          :key="info"  
          :cardInfo="info"
          :buttonText="$t('EnterTestResult')"
          @button1Clicked="showPopup"
          class="text-black"
        />
      </div>
    </q-scroll-area>

    <q-dialog v-model="showTestPopup" persistent>
      <q-card style="width: 400px">
        <q-card-section>
          <div class="text-subtitle2"> Enter test result for Ahmed Salih Cezayir </div>
          <q-select
            v-model="testResult" 
            class="q-mt-sm" 
            color="secondary" 
            outlined 
            dense 
            :label="$t('TestResult')"
            :options="[$t('Positive'), $t('Negative')]"/>
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
import { ref } from 'vue'
import GenericUserCard from '../generic/GenericUserCard.vue'

export default {
  name: "DiagnovirReservationsStaff",
  props: {
    cardInfos: Array
  },
  components: {
    GenericUserCard
  },
  setup() {
    const search = ref(null);
    const date = ref(null);
    const time = ref(null); 
    const showTestPopup = ref(false);
    const testResult = ref(null);

    const showPopup = () => {
      showTestPopup.value = true
    }

    return {
      search,
      date,
      time,
      showTestPopup,
      showPopup,
      testResult
    }
  },
}
</script>
