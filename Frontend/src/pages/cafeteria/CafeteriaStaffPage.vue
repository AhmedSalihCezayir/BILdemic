<template>
  <div>
    <food-distribution 
      :cardInfos="cardInfos"
      :regionInfo="regionInfo"
      :menuInfo="menuInfo"
    />

    <q-page-sticky position="bottom-left" :offset="fabPos" v-if="isMobile">
      <q-fab
        icon="mdi-chevron-right"
        active-icon="mdi-chevron-left"
        color="secondary"
        padding="10px"
        @click="toggleDrawer"
      >
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import FoodDistribution from '../../components/cafeteria/FoodDistribution.vue'

export default {
  name: "CafeteriaStaffPage",
  components: {
    FoodDistribution
  },
  computed: {
    regionInfo() {
      return [
        {
          name: '78.yurt',
          data: [
            {
              label: this.$t('Normal'),
              data: 50
            },
            {
              label: this.$t('Vegan'),
              data: 50
            },
            {
              label: this.$t('Vegetarian'),
              data: 50
            },
          ]
        },
        {
          name: '78.yurt',
          data: [
            {
              label: this.$t('Normal'),
              data: 50
            },
            {
              label: this.$t('Vegan'),
              data: 50
            },
            {
              label: this.$t('Vegetarian'),
              data: 50
            },
          ]
        },
        {
          name: '78.yurt',
          data: [
            {
              label: this.$t('Normal'),
              data: 50
            },
            {
              label: this.$t('Vegan'),
              data: 50
            },
            {
              label: this.$t('Vegetarian'),
              data: 50
            },
          ]
        }
      ]
    },
    menuInfo() {
      return [
        {
          label: this.$t('Normal'),
          data: 110
        },
        {
          label: this.$t('Vegetarian'),
          data: 56
        },
        {
          label: this.$t('Vegan'),
          data: 5
        }
      ]
    },
  },

  setup(props, ctx) {
    const $q = useQuasar();

    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const open = ref(!isMobile.value);

    watch(isMobile, () => {
      open.value = !isMobile.value;
    })

    const hasReservation = ref(false);

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const cardInfos = [
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Ahmed Salih Cezayir",
          21802918,
          "Normal"
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "Asude Cezayir",
          21802918,
          "Vegan"
        ]
      },
      {
        url: "https://placeimg.com/500/300/nature",
        data: [
          "İsmail Sergen Göçmen",
          21802918,
          "Vegeterian"
        ]
      }
    ];

    const fabPos = ref([ 18, 18 ]);

    return {
      toggleDrawer,
      isMobile,
      hasReservation,
      cardInfos,
      fabPos,
    }
  },
}
</script>
