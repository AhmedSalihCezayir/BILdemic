<template>
  <div class="row bordered items-center" style="height: 150px">
    <q-img :src="cardInfo.url" class="q-ml-md" style="height: 100px; max-width: 100px"/>
    <q-separator vertical class="q-mx-md" />
    <div class="col">
      <div v-for="i in cardInfo.data" :key="i" class="q-mt-xs">
        {{ i }}
      </div>
    </div>
    <q-btn 
      :label="buttonText" 
      class="q-mr-md" 
      color="secondary" 
      @click="button1Clicked" />
    <q-btn 
      v-if="hasSecondButton" 
      :label="secondButtonText" 
      class="q-mr-md" 
      color="secondary" 
      @click="button2Clicked"/>
  </div>
</template>

<script>
export default {
  name: "GenericUserCard",
  props: {
    buttonText: String,
    cardInfo: Object,
    hasSecondButton: Boolean,
    secondButtonText: String
  },
  setup(props, ctx) {
    const button1Clicked = () => {
      ctx.emit('button1Clicked')
    }

    const button2Clicked = () => {
      ctx.emit('button2Clicked')
    }

    return {
      button1Clicked,
      button2Clicked
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