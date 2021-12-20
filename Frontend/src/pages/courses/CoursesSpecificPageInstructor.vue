<template>
  <div :style="pageStyling"> 
    <q-banner inline-actions class="text-white bg-secondary">
      <q-icon  v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <div class="column">
        <span class="text-h5"> CS201 </span>
        <span class="text-subtitle1"> Section-01 </span> 
        <span class="text-subtitle1"> B-202 </span>
      </div>
    </q-banner>

    <div class="row items-center">
      <q-btn outline unelevated :label="$t('GenerateLectureCode')" class="text-secondary q-mx-md q-mt-md col" />
      <div class="col-9 q-mt-md q-pa-sm q-mr-md bordered" dense>
        <span class="text-weight-bold">
          {{ $t('LectureCodeIs') }} 
        </span>
        {{ lectureCode }}
      </div>
    </div>

    <div class="row q-ma-md">
      <seating-plan 
        :studentView="false"
        :active="true"
        :row="5"
        :col="5"
        :seatingPlan="seatingPlan"
      />

      <div class="column q-mt-md q-ml-xl">
        <div>
          <b> {{ $t('SeatingPlanLegend') }} </b>
        </div>
        <div>
          <q-badge rounded color="yellow" />
          <span class="q-ml-sm">
            {{ $t('YellowDesc') }}
          </span>
        </div>
        <div>
          <q-badge rounded color="green" />
          <span class="q-ml-sm">
            {{ $t('GreenDesc') }}
          </span>
        </div>
        <div>
          <q-badge rounded color="red" />
          <span class="q-ml-sm">
            {{ $t('RedDesc') }}
          </span>
        </div> 
        <div>
          <q-badge rounded color="grey" />
          <span class="q-ml-sm">
            {{ $t('GreyDesc') }}
          </span>
        </div> 
        <div>
          <q-badge rounded color="black" />
          <span class="q-ml-sm">
            {{ $t('BlackDesc') }}
          </span>
        </div>  
      </div>
    </div>


  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import SeatingPlan from '../../components/courses/SeatingPlan.vue'

export default {
  name: "CourseSpecificPageInstructor",
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

    const pageStyling = computed(() => {
      return open.value ? "width: calc(100% - 200px); margin-left: 200px;" : "";
    })

    const lectureCode = "4568798";

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
      pageStyling,
      isMobile,
      seatingPlan,
      lectureCode
    }
  },
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 200px;
}

.bordered { 
  border: 1px solid rgb(20, 168, 168);
  border-radius: 5px;
}

a {
  text-decoration: none;
}
</style>