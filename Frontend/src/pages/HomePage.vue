<template>
  <div :style="pageStyling"> 
    <div class="column">
    <q-banner v-if="riskless" inline-actions class="text-white bg-green">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      {{ $t('AllowedInCampus') }} 
      {{ $t('FullyVaccinated') }}
    </q-banner>
    <q-banner v-else inline-actions class="text-white bg-red">
      <q-icon v-if="isMobile" size="sm" name="menu" @click="toggleDrawer"/>
      {{ $t('NotAllowedInCampus') }} 
      {{ $t('YouAreRisky') }}
    </q-banner>
    </div>
    <div class="q-pa-md q-mx-xs row q-gutter-lg">
      <router-link :to="section.route" v-for="section in filteredSections" :key="section.name" class="my-card">
        <q-card class="bg-secondary text-white">
          <q-card-section align="center" style="height:120px">
            <div class="text-h6">{{ $t(section.name) }}</div>
            <q-icon size="lg" :name="section.icon" />
          </q-card-section>
        </q-card>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export default {
  name: "HomePage",

  setup(props, ctx) {
    const $q = useQuasar();
    const riskless = computed(() => {
      return true;
    })

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

    const filteredSections = computed(() => {
      return sections.filter(item => {
        if (!item.disable) {
          return item
        }
      });
    })

    const sections = [
      {
        name: "Courses",
        icon: "mdi-book-open-variant",
        route: "/~/courses",
        disable: !riskless.value
      },
      {
        name: "DiagnovirCenter",
        icon: "mdi-needle",
        route: "/~/diagnovir"
      },
      {
        name: "HealthCenter",
        icon: "mdi-ambulance",
        route: "/~/health"
      },
      {
        name: "SportsCenter",
        icon: "mdi-weight-lifter",
        route: "/~/sports",
        disable: !riskless.value
      },
      {
        name: "Cafeteria",
        icon: "mdi-food",
        route: "/~/cafeteria"
      },
      {
        name: "WeeklyReport",
        icon: "mdi-newspaper",
        route: "/~/weekly"
      },
    ]

    return {
      riskless,
      filteredSections,
      toggleDrawer,
      pageStyling,
      isMobile
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
