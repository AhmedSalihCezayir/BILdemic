<template>
  <q-dialog v-model="confirm" persistent>
      <q-card style="width: 300px">
        <q-card-section class="row items-center">
          <span>{{ $t('AreYouSure') }} </span>
        </q-card-section>

        <q-card-actions :class="buttonAlignment">
          <q-btn v-if="hasNegativeButton" flat :label="negativeText" color="secondary" v-close-popup />
          <q-btn v-if="hasPositiveButton" flat :label="positiveText" color="secondary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  props: {
    hasPositiveButton: Boolean,
    hasNegativeButton: Boolean,
    positiveText: String,
    negativeText: String
  },

  setup(props) {
    const confirm = ref(true);

    const buttonAlignment = computed(() => {
      return (!props.hasNegativeButton) ? 'justify-end' : 'justify-between';
    });

    return {
      confirm,
      buttonAlignment
    }
  },
}
</script>