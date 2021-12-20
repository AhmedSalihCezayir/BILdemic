<template>
  <div class="column items-center">
    <div style="width: 40%" class="q-gutter-y-md col-4">
      <q-select v-model="place" color="secondary" outlined :label="$t('Place')" dense/>
      <q-select v-model="activity" color="secondary" outlined :label="$t('Activity')" dense/>
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

    <q-scroll-area class="full-width" style="height: 350px" >
      <div class="column q-gutter-y-md full-width items-center q-mt-md">
        <generic-user-card 
          v-for="info in cardInfos" 
          :key="info"  
          :cardInfo="info"
          :buttonText="$t('PersonIsHere')"
          class="text-black"
        />
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { ref } from 'vue'
import GenericUserCard from '../generic/GenericUserCard.vue'

export default {
  name: "SportsReservationsStaff",
  props: {
    cardInfos: Array
  },
  components: {
    GenericUserCard
  },
  setup() {
    const search = ref(null);
    const place = ref(null);
    const activity = ref(null);
    const date = ref(null);
    const time = ref(null); 

    return {
      search,
      place,
      activity,
      date,
      time
    }
  },
}
</script>
