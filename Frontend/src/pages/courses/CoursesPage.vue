<template>
  <div :style="pageStyling"> 
    <div class="column">
    <q-banner inline-actions class="text-white bg-accent">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('CoursesPageDesc') }} </b> 
      <q-btn :label="$t('Register')" unelevated class="bg-secondary fixed-top-right q-mt-sm q-mr-sm"/>
    </q-banner>
    
    </div>
    <div class="q-pa-md q-mx-xs row q-gutter-lg">
      <router-link :to="calculateRoute(course)" v-for="course in courses" :key="course.name" class="my-card">
        <q-card class="bg-secondary text-white">
          <q-card-section align="center" style="height:120px">
            <div class="text-h6">{{ $t(course.name) }}</div>
            <div class="text-h6">{{ $t(course.section) }}</div>
            <div class="text-h6">{{ $t(course.building) }}</div>
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: "CoursesPage",
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

    const calculateRoute = (course) => {
      return "/~/courses/" + course.name.toLowerCase();
    }; 

    const courses = [
      {
        name: "CS201",
        section: "Section-01",
        building: "B-202"
      },
      {
        name: "CS315",
        section: "Section-01",
        building: "B-202"
      },
      {
        name: "CS319",
        section: "Section-01",
        building: "B-202"
      },
      {
        name: "MATH225",
        section: "Section-01",
        building: "B-202"
      },
      {
        name: "MATH230",
        section: "Section-01",
        building: "B-202"
      },
      {
        name: "GE301",
        section: "Section-01",
        building: "B-202"
      },
    ]

    return {
      toggleDrawer,
      pageStyling,
      isMobile,
      courses,
      calculateRoute
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