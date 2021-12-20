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
        <q-tab name="menu" :label="$t('MenuDist')" />
        <q-tab name="regional" :label="$t('RegionalDist')" />
        <q-tab name="individual" :label="$t('IndividualDist')" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <q-page class="row">
        <q-tab-panels v-model="tab" swipeable animated style="width: 100%">
          <q-tab-panel name="menu" class="row justify-center text-black">
            <q-field outlined color="secondary" class="rowjustify-center q-mt-xl col-7">
              <q-form class="q-gutter-y-md q-pa-md full-width" >
                <div>
                  <b>{{ $t('MenuBasedDesc') }}</b>
                </div>
                <q-field 
                  v-for="menu in menuInfo" 
                  :key="menu.label" 
                  outlined 
                  stack-label
                  :label="menu.label"
                  color="secondary"
                >
                  <template v-slot:control>
                    <div class="self-center"> 
                      {{ menu.data }} 
                    </div>
                  </template>
                </q-field>
              </q-form>
            </q-field>
          </q-tab-panel>

          <q-tab-panel swipeable name="regional" class="row justify-center text-black">
            <div v-for="region in regionInfo" :key="region.name" class="col-7">
              <q-field outlined color="secondary" class="row justify-center q-mt-md full-width">
                <q-form class="q-gutter-y-md q-px-md q-py-md full-width" >
                  <div>
                    <b>{{ region.name }}</b>
                  </div>

                  <q-field 
                    v-for="slot in region.data" 
                    :key="slot.label" 
                    outlined 
                    stack-label
                    :label="slot.label"
                    color="secondary"
                  >
                    <template v-slot:control>
                      <div class="self-center"> 
                        {{ slot.data }} 
                      </div>
                    </template>
                  </q-field>
                </q-form>
              </q-field>
            </div>
          </q-tab-panel>

          <q-tab-panel swipeable name="individual">
            <div class="column q-gutter-y-md full-width items-center">
              <q-input
                v-model="search"
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

              <generic-user-card 
                v-for="info in cardInfos" 
                :key="info"  
                :cardInfo="info"
                :buttonText="$t('MealIsTaken')"
                class="text-black"
              />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-page>
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import { ref } from 'vue'
import GenericUserCard from '../generic/GenericUserCard.vue'

export default {
  components: {
    GenericUserCard
  },
  props: {
    cardInfos: Array,
    regionInfo: Array,
    menuInfo: Array
  },
  setup() {
    return {
      tab: ref('menu'),
      search: ref()
    }
  },
}
</script>
