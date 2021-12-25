<template>
  <div> 
    <div class="column">
    <q-banner inline-actions class="text-white bg-accent">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      <b> {{ $t('CoursesPageInstrDesc') }} </b> 
      <q-btn :label="$t('CreateCourse')" unelevated class="bg-secondary fixed-top-right q-mt-sm q-mr-sm" @click="create = true"/>
    </q-banner>

    </div>

    
    <div class="q-pa-md q-mx-xs row q-gutter-lg">
      <router-link :to="`courses/${JSON.stringify(lecture['_LID'])}`" v-for="lecture in lectures" :key="lecture['_LID']" class="my-card">
        <q-card class="bg-secondary text-white">
          <q-card-section align="center" style="height:120px">
            <div class="text-h6">{{ lecture["_lectureName"] }}</div>
            <div class="text-h6">Section-{{ lecture["_section"] }}</div>
            <div class="text-h6">{{ lecture["_place"] }}</div>
          </q-card-section>
        </q-card>
      </router-link>
    </div>

    <!-- Create a course popup -->
    <q-dialog v-model="create" persistent>
      <q-card style="width: 400px">
        <q-card-section class="col items-center q-gutter-y-md">
          <div class="row justify-center">
            <q-input v-model="courseName" class="col" color="secondary" :label="$t('EnterCourseName')" dense outlined />
          </div>
          <div class="row justify-center">
            <q-input v-model="courseCode" class="col" color="secondary" :label="$t('EnterCourseCode')" dense outlined />
          </div>
          <div class="row justify-center">
            <q-input v-model="sectionNo" class="col" color="secondary" :label="$t('EnterSectionNo')" dense outlined />
          </div>
          <div class="row justify-center">
            <q-input v-model="building" class="col" color="secondary" :label="$t('EnterBuilding')" dense outlined />
          </div>
          <div class="row justify-center">
            <q-input v-model="place" class="col" color="secondary" :label="$t('EnterClassroom')" dense outlined />
          </div>
        </q-card-section>

        <q-card-actions class="justify-between">
          <q-btn flat :label="$t('Cancel')" color="secondary" v-close-popup />
          <q-btn flat :label="$t('CreateCourse')" color="secondary" @click="createCourse(courseName, sectionNo, building, place)" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import LectureManager from '../../classes/LectureManager'
import { useStore } from 'vuex'

export default {
  name: "CoursesPageInstructor",
  computed: {
    lectures() {
      const lm = LectureManager.getInstance(); 
      return lm.getInstructorlectures(useStore().state.settings.currentUserUID);
    }
  },
  setup(props, ctx) {
    const $q = useQuasar();

    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const open = ref(!isMobile.value);

    const create = ref(false);
    const courseName = ref(null);
    const courseCode = ref(null);
    const sectionNo = ref(null);
    const building = ref(null);
    const place = ref(null);

    const lm = LectureManager.getInstance();

    watch(isMobile, () => {
      open.value = !isMobile.value;
    })

    const toggleDrawer = () => {
      open.value = !open.value
      ctx.emit('toggleDrawer');
    }

    const calculateRoute = (course) => {
      return "/staff/courses/" + course.name.toLowerCase();
    }; 

    const createCourse = async (courseName, sectionNo, building, place) => {
      await lm.createCourse(courseName, sectionNo, building, place);
    }

    return {
      toggleDrawer,
      isMobile,
      createCourse,
      calculateRoute,
      create,
      courseName,
      courseCode,
      sectionNo,
      building,
      place
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

a
  text-decoration: none
</style>