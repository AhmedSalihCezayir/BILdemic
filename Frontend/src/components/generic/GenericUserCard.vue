<template>
  <div class="row bordered items-center" style="height: 150px">
    <q-img :src="cardInfo.url" class="q-ml-md" style="height: 100px; max-width: 100px"/>
    <q-separator vertical class="q-mx-md" />
    <div class="col">
      <div v-for="i in cardInfo.data" :key="i" class="q-mt-xs">
        {{ i }}
      </div>
    </div>
    <q-btn class="q-mr-md" color="secondary" :label="buttonText"/>
  </div>
</template>

<script>
export default {
  name: "GenericUserCard",
  props: {
    buttonText: String,
    cardInfo: Array
  },
  setup() {
    
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