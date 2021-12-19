<template>
  <div class="row justify-center">
    <q-field outlined style="width: 50%;" color="secondary">
    <q-form class="q-gutter-y-md q-px-md q-py-md full-width" >

      <q-field 
        outlined 
        stack-label  
        :label="$t('ReservationDate')"
        color="secondary"
        >
        <template v-slot:control>
          <div class="self-center"> 
            {{ data.date }}
          </div>
        </template>
      </q-field>

      <q-field 
        outlined 
        stack-label  
        :label="$t('ReservationTime')"
        color="secondary"
        >
        <template v-slot:control>
          <div class="self-center"> 
            {{ data.time }}
          </div>
        </template>
      </q-field>

      <q-field 
        outlined 
        stack-label 
        :label="$t('ReservationPlace')"
        color="secondary"
        >
        <template v-slot:control>
          <div class="self-center"> 
            {{ data.place }}
          </div>
        </template>
      </q-field>

      <q-field 
        outlined 
        stack-label 
        label-color="white"
        class="text-white"
        :bg-color="`${(data.result == 'positive') ? 'negative' : 'positive'}`" 
        :label="$t('TestResult')"
        color="black"
        >
        <template v-slot:control>
          <div class="self-center text-white"> 
            {{ data.result.charAt(0).toUpperCase() + data.result.slice(1) }} 
          </div>
        </template>
      </q-field>

    </q-form>
    </q-field>
  </div>
</template>

<script>

export default {
  name: "TestResult",
  props: {
    data: Object
  },

  setup() {
    return {

    }
  },
}
</script>