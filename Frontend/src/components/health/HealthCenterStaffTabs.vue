<template>
<div class="text-white">
  <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
    <q-header>
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3 text-secondary"
        active-color="secondary"
        indicator-color="secondary"
        align="justify"
      >
        <q-tab name="newHealthForms" :label="$t('NewHealthForms')" />
        <q-tab name="ongoingChats" :label="$t('OngoingChats')" />
        <q-tab name="emergency" :label="$t('Emergency')">
          <q-badge floating rounded color="red" :label="emergencyCount" />
        </q-tab>
      </q-tabs>
    </q-header>

    <q-page-container>
      <q-page class="row">
        <q-tab-panels v-model="tab" swipeable animated style="width: 100%">
          <q-tab-panel name="newHealthForms" class="row justify-center text-black">
            <div class="full-width">
              <q-input
                v-model="searchForm"
                debounce="1000"
                filled
                :placeholder="$t('Search')"
                color="secondary"
                class="full-width"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-scroll-area class="full-width q-mt-md" style="height: 500px" >
                <div class="column q-gutter-y-md full-width items-center">
                  <generic-user-card 
                    v-for="info in cardInfos" 
                    :key="info"  
                    :cardInfo="info"
                    :buttonText="$t('SeeHealthForm')"
                    class="text-black"
                    @button1Clicked="showForm"
                  />
                </div>
              </q-scroll-area>
            </div>
          </q-tab-panel>

          <q-tab-panel name="ongoingChats" class="row justify-center text-black">
            <div class="row justify-center full-width">
              <q-input
                v-model="searchChat"
                debounce="1000"
                filled
                :placeholder="$t('Search')"
                color="secondary"
                class="full-width"
              >
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>

              <q-scroll-area class="full-width q-mt-md" style="height: 500px" >
                <div class="column q-gutter-y-md full-width items-center">
                  <generic-user-card 
                    v-for="info in cardInfos" 
                    :key="info"  
                    :cardInfo="info"
                    :buttonText="$t('SeeChat')"
                    :hasSecondButton="true"
                    :secondButtonText="$t('SeeHealthForm')"
                    class="text-black"
                    @button2Clicked="showForm"
                  />
                </div>
              </q-scroll-area>
            </div>
          </q-tab-panel>

          <q-tab-panel name="emergency" class="row justify-center text-black">
            <div class="full-width">
              <q-scroll-area class="full-width q-mt-md" style="height: 550px" >
                <div class="column q-gutter-y-md full-width items-center">
                  <generic-user-card 
                    v-for="info in cardInfos" 
                    :key="info"  
                    :cardInfo="info"
                    :buttonText="$t('Dismiss')"
                    class="text-black"
                  />
                </div>
              </q-scroll-area>
            </div>
          </q-tab-panel>

        </q-tab-panels>
      </q-page>
    </q-page-container>
  </q-layout>

  <!-- Popup for the HealthFormStaffView -->
  <q-dialog v-model="showHealthForm">
      <q-card>
        <q-card-section class="col items-center">
          <health-form-staff-view />
        </q-card-section>
      </q-card>
    </q-dialog>

</div>
</template>

<script>
import { ref } from 'vue'
import GenericUserCard from '../generic/GenericUserCard.vue'
import HealthFormStaffView from '../health/HealthFormStaffView.vue'

export default {
  name: 'HealthCenterStaffTabs',
  components: {
    GenericUserCard,
    HealthFormStaffView
  },
  props: {
    cardInfos: Array
  },

  setup() {
    const tab = ref('newHealthForms');
    const searchForm = ref(null);
    const searchChat = ref(null);
    const emergencyCount = ref(10);

    const showHealthForm = ref(false);

    const showForm = () => {
      // YOU NEED TO GET USER DATA FROM THE CARD WHEN EMITTING
      showHealthForm.value = true;
    }

    return {
      tab,
      searchForm,
      searchChat,
      emergencyCount,
      showHealthForm,
      showForm
    } 
  },
}
</script>

<style lang="sass" scoped>
.q-badge
  top: 3px
  right: -20px
</style>