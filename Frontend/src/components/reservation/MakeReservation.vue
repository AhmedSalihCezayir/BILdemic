<template>
  <div class="row justify-center">
    <div outlined color="secondary" class="bordered">
      <q-form class="q-gutter-y-md q-px-lg q-py-md full-width text-secondary" >
        <div>
          <b>{{ title }}</b>
        </div>

        <q-select
          v-if="hasMeal"
          v-model="meal"
          :options="mealArr"
          color="secondary"
          outlined
          clearable
          :label="$t('SelectMealType')"
        />

        <q-select
          v-if="hasPlace"
          v-model="place"
          :options="placeArr"
          color="secondary"
          outlined
          clearable
          :label="$t('SelectPlace')"
        />

        <q-select
          v-if="hasActivity"
          v-model="activity"
          :options="datesArr"
          color="secondary"
          outlined
          clearable
          :label="$t('SelectActivity')"
        />

        <q-select
          v-if="hasDate"
          v-model="date"
          :options="datesArr"
          color="secondary"
          outlined
          clearable
          :label="$t('SelectReservationDate')"
        />

        <q-select
          v-if="hasTime"
          v-model="time"
          :options="timesArr"
          color="secondary"
          outlined
          clearable
          :label="$t('SelectReservationTime')"
        />

        <q-btn :label="$t('MakeReservation')" type="submit" color="secondary" @click.prevent="makeReservation"/>
      </q-form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "MakeReservation",
  props: {
    hasMeal: Boolean,
    hasPlace: Boolean,
    hasActivity: Boolean,
    hasDate: Boolean,
    hasTime: Boolean,
    type: String,
    title: String
  },
  setup(props, ctx) {
    const meal = ref(null);
    const place = ref(null);
    const activity = ref(null);
    const date = ref(null);
    const time = ref(null);
    
    const mealArr = [
      "Normal", "Vegetarian", "Vegan"
    ]

    // Get available slot info from db using type prop
    const datesArr = [
      "11.12.2021", "12.12.2021", "13.12.2021", "14.12.2021", "15.12.2021", "16.12.2021"
    ]

    const timesArr = [
      "08.30", "09.00", "09.30", "10.00", "10.30", "11.00"
    ]

    const placeArr = [
      "78", "50", "90"
    ]

    const makeReservation = () => {
      let data;

      if (props.type == 'diagnovir') {
        data = { date: date.value, time: time.value };
      }
      else if (props.type == 'sports') {
        data = { place: place.value, date: date.value, time: time.value, activity: activity.value };
      }
      else if (props.type == 'meal') {
        data = { place: place.value, date: date.value, time: time.value, meal: meal.value };
      }

      ctx.emit('makeReservation', data);
    }

    return {
      meal,
      place,
      activity,
      date,
      time,
      mealArr,
      datesArr,
      timesArr,
      makeReservation,
      placeArr
    } 
  },
}
</script>

<style scoped>
.bordered { 
  border: 1px solid rgb(192, 192, 192);
  width: 50%;
  border-radius: 5px;
}
</style>