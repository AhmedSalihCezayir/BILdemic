<template>
  <div class="q-pa-md">

    <!-- Seat selection Student view-->
    <div v-if="studentView && firstTime">
      <div class="row" v-for="a in row" :key="a">
        <div class="seat" v-for="b in col" :key="b">
          <q-btn-dropdown class="seat without-icon">
            <template v-slot:label>
              <q-tooltip class="bg-secondary"> {{ $t('ClickToSelectSeat') }} </q-tooltip>
            </template>
            
            <q-card style="width: 300px">
              <q-card-section class="col items-center">
                {{ $t("SelectSeat") }}
              </q-card-section>

              <q-card-actions class="justify-between">
                <q-btn flat :label="$t('Cancel')" color="secondary" v-close-popup />
                <q-btn flat :label="$t('Accept')" color="secondary" @click="select(a, b)"/>
              </q-card-actions>
            </q-card>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <!-- Student view and seating plan is not active -->
    <div v-if="studentView && !active && !firstTime">
      <div class="row" v-for="a in row" :key="a">
        <div class="seat" v-for="b in col" :key="b">
          <q-icon v-if="a == (personalRow + 1) && b == (personalCol + 1)" size="sm" name="mdi-close-outline">
            <q-tooltip class="bg-secondary"> {{ $t('YourSeat') }} </q-tooltip>
          </q-icon>
        </div>
      </div>
    </div>

    <!-- Student view and seating plan is active -->
    <div v-if="studentView && active && !firstTime">
      <div class="row" v-for="a in row" :key="a">
        <div :class="neighbourColors(a - 1, b - 1)" v-for="b in col" :key="b">
          <q-btn v-if="a == personalRow + 1 && b == personalCol + 1" class="seat" @click="showPopupForNeigh">
            <template v-slot>
              <q-icon v-if="a == (personalRow + 1) && b == (personalCol + 1)" size="sm" name="mdi-close-outline">
                <q-tooltip class="bg-secondary"> {{ $t('ClickToEnterNeigh') }} </q-tooltip>
              </q-icon>
            </template>
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Instructor view and seating plan is not active -->
    <div v-if="!studentView && !active">
      <div class="row" v-for="a in row" :key="a">
        <div class="seat" v-for="b in col" :key="b">
          
        </div>
      </div>
    </div>

    <!-- Instructor view and seating plan is active -->
    <div v-if="!studentView && active">
      <div class="row" v-for="a in row" :key="a">
        <div class="seat" v-for="b in col" :key="b">
          <q-btn-dropdown :class="`seat without-icon ${seatingPlan[a - 1][b - 1].status}`">
            <template v-slot:label>
              <q-tooltip class="bg-secondary"> {{ $t('ClickToChangeSeatingStatus') }} </q-tooltip>
              <q-spinner-dots v-if="seatingPlan[a - 1][b - 1].status == 'bg-grey'" color="white" size="sm" />
              <!-- <q-icon v-if="seatingPlan[a - 1][b - 1].status == 'bg-red'" size="sm" name="mdi-alert-outline"/> -->
            </template>
            
            <div class="row no-wrap q-pa-md" style="width: 270px">
              <div class="column items-center">
                <q-avatar square size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div class="text-subtitle1 q-mt-md q-mb-xs">Sponge Bob</div>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column q-gutter-sm">
                <q-btn unelevated :label="$t('Accept')" color="positive"/>
                <q-btn unelevated :label="$t('Decline')" color="negative"/>
                <q-btn outline unelevated :label="$t('Cancel')" v-close-popup class="text-secondary"/>
              </div> 
            </div>
          </q-btn-dropdown>
        </div>
      </div>
    </div>

    <!-- Popup for neighbour seat code  TODO -->
    <q-dialog v-model="showNeighPopup" persistent>
      <q-card style="width: 300px">
        <q-card-section class="col items-center">
          <q-banner dense inline-actions class="text-white bg-secondary">
            {{ $t("YourSeatingCode") }} <b> 789-478 </b>
          </q-banner>
          <div class="row justify-center q-mt-md">
            <q-input v-if="hasLeft" v-model="left" :class="`col ${ hasRight ? 'q-mr-md' : ''}`" color="secondary" :label="$t('LeftCode')" type="tel" dense outlined mask="###-###"/>
            <q-input v-if="hasRight" v-model="right" class="col" color="secondary" :label="$t('RightCode')" type="tel" dense outlined mask="###-###"/>
          </div>
        </q-card-section>

        <q-card-actions class="justify-between">
          <q-btn flat :label="$t('Cancel')" color="secondary" v-close-popup />
          <q-btn flat :label="$t('Submit')" color="secondary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "SeatingPlan",

  props: {
    row: Number,
    col: Number,
    active: Boolean,
    studentView: Boolean,
    seatingPlan: Array,
    personalRow: Number,
    personalCol: Number,
    firstTime: Boolean,
    hasLeft: Boolean,
    hasRight: Boolean
  },

  setup(props, ctx) {
    const neighbourColors = (row, col) => {
      return ((row == (props.personalRow)) && (col == props.personalCol - 1)) || ((row == (props.personalRow)) && (col == props.personalCol + 1)) ? "seat bg-grey" : "seat";
    };

    const left = ref(null)
    const right = ref(null)

    const showNeighPopup = ref(false);

    const showPopupForNeigh = () => {
      showNeighPopup.value = true; 
    }

    const select = (row, col) => {
      ctx.emit('selected', { row, col })
    }

    return {
      neighbourColors,
      left,
      right,
      showPopupForNeigh,
      showNeighPopup,
      select
    }
  },
}
</script>

<style> 
.seat {
  width: 50px;
  height: 50px;
  border: 0.2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

button.without-icon i { 
  display: none
}
</style>
