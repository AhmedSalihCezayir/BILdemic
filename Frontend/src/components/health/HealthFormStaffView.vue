<template>
  <div class="column q-pa-md" style="width: 500px;">
    <div class="column items-center">
      <q-img src="https://placeimg.com/500/300/nature" style="width: 150px"/>
      <div class="q-ma-md">
        <div>Sponge Bob</div>
        <div>21802918</div>
      </div>
    </div>

    <q-list dense class="q-mt-xl">
      <q-item clickable>
        <q-item-section>
          <b>Patient's symptoms</b>
        </q-item-section>
      </q-item>
      <q-item clickable v-for="symptom in symptoms" :key="symptom">
        <q-item-section side>
          <q-icon name="mdi-circle-small"/>
        </q-item-section>
        
        <q-item-section>
          {{ symptom }}
        </q-item-section>
      </q-item>
    </q-list>

    <q-btn 
      color="secondary" 
      class="q-ma-md"
      style="width: 50%"
      :label="$t('StartChat')"/>
  </div>
</template>

<script>
export default {
  name: "HealthFormStaffView",
  props: {
    // symptoms: Array
  },
  setup() {
    const symptoms = ['Öksürük', 'Baş Ağrısı', 'Halsizlik'];
    
    return {
      symptoms
    }
  },
}
</script>
