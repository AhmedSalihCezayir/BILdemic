<template>
  <div> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon  v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <div class="column">
        <span class="text-h5"> CS201 </span>
        <span class="text-subtitle1"> Section-01 </span> 
        <span class="text-subtitle1"> B-202 </span>
      </div>
    </q-banner>

    <div class="row items-center">
      <q-input v-model="lectureCode" outlined class="col-9 q-mt-md q-ml-md" dense :label="$t('EnterLectureCode')" color="secondary" mask="####-####"/>
      <q-btn outline unelevated :label="$t('Send')" class="text-secondary q-mx-md q-mt-md col" />
    </div>

    <seating-plan 
      class="q-mt-lg"
      :studentView="true"
      :active="true"
      :firstTime="false"
      :row="5"
      :col="5"
      :personalRow="4"
      :personalCol="4"
      :seatingPlan="seatingPlan"
      :hasLeft="true"
      :hasRight="false"
    />

  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import SeatingPlan from '../../components/courses/SeatingPlan.vue'

export default {
  name: "CourseSpecificPage",
  components: {
    SeatingPlan
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

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const lectureCode = ref(null);

    const seatingPlan = [
      [
        {
          status: "bg-green"
        },
        {
          status: "bg-yellow"
        },
        {
          status: "bg-grey"
        },
        {
          status: "bg-green"
        },
        {
          status: "bg-yellow"
        }
      ],
      [
        {
          status: "bg-green"
        },
        {
          status: "bg-red"
        },
        {
          status: "bg-red"
        },
        {
          status: "bg-green"
        },
        {
          status: "bg-grey"
        },
      ],
      [
        {
          status: "bg-red"
        },
        {
          status: "bg-grey"
        },
        {
          status: "bg-black"
        },
        {
          status: "bg-red"
        },
        {
          status: "bg-grey"
        }
      ],
      [
        {
          status: "bg-green"
        },
        {
          status: "bg-yellow"
        },
        {
          status: "bg-red"
        },
        {
          status: "bg-grey"
        },
        {
          status: "bg-yellow"
        }
      ],
      [
        {
          status: "bg-red"
        },
        {
          status: "bg-green"
        },
        {
          status: "bg-black"
        },
        {
          status: "bg-red"
        },
        {
          status: "bg-green"
        }
      ],
      [
        {
          status: "bg-black"
        },
        {
          status: "bg-yellow"
        },
        {
          status: "bg-black"
        },
        {
          status: "bg-green"
        },
        {
          status: "bg-green"
        }
      ],
    ];

    return {
      toggleDrawer,
      isMobile,
      seatingPlan,
      lectureCode
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 200px

a
  text-decoration: none
</style>