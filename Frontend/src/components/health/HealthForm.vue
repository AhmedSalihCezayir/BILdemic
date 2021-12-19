<template>
<div class="row justify-center bordered">
  <div class="column q-py-md">
    <div class="text-secondary q-ml-sm">
      <b> {{ $t('SelectTheSymptoms') }} </b>
    </div>
    <q-option-group 
      :options="symptoms"
      type="checkbox"
      v-model="selection"
      color="secondary"
    />

    <q-btn color="secondary" label="Submit" style="width: 50%" class="q-mt-md q-ml-sm"/>
  </div>
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "HealtForm",
  computed: {
    symptoms() {
      return [
        {
          label: this.$t('Fever'),
          value: 'fever'
        }, 
        {
          label: this.$t('Cough'),
          value: 'cough'
        }, 
        {
          label: this.$t('Tiredness'),
          value: 'tiredness'
        }, 
        {
          label: this.$t('LossOfTaste'),
          value: 'lossOfTaste'
        }, 
        {
          label: this.$t('SoreThroat'),
          value: 'soreThroat'
        }, 
        {
          label: this.$t('Headache'),
          value: 'headache'
        }, 
        {
          label: this.$t('Diarrhea'),
          value: 'diarrhea'
        },
        {
          label: this.$t('DifficultyBreathing'),
          value: 'difficultyBreathing'
        },
        {
          label: this.$t('LossOfSpeech'),
          value: 'lossOfSpeech'
        },
        {
          label: this.$t('ChestPain'),
          value: 'chestPain'
        },
      ]
    }
  },
  setup() {
    const selection = ref([]);

    return {
      selection
    }
  },
}
</script>

<style scoped>
.bordered { 
  border: 1px solid rgb(192, 192, 192);
  width: 420px;
  border-radius: 5px;
}
</style>