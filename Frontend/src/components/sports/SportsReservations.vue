<template>
  <div class="q-mt-lg q-gutter-y-md">
    <my-reservations
      v-for="slot in slots" 
      :key="slot"
      :slots="slot"
      />
  </div>
</template>

<script>
import MyReservations from "../reservation/MyReservations.vue"

export default {
  name: "SportReservations",
  components: {
    MyReservations
  },
  computed: {
    slots() {
      return [
        [
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
        ],
        [
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
        ],

      ]
    },
  },

  setup() {
    return {

    }
  },
}
</script>
