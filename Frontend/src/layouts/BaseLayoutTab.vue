<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        :width="200"
        bordered
        behavior="desktop"
      >
        <div style="height: calc(100% - 100px); margin-top: 100px">
          <q-list class="q-py-none">
            <div>
              <q-item clickable v-ripple to="/~/courses" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('Courses') }}
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/~/diagnovir" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('DiagnovirCenter') }}
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/~/health" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('HealthCenter') }}
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/~/sports" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('SportsCenter') }}
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/~/cafeteria" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('Cafeteria') }}
                </q-item-section>
              </q-item>
  
              <q-item clickable v-ripple to="/~/weekly" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('WeeklyReport') }}
                </q-item-section>
              </q-item>
            </div>

            <div class="fixed-bottom q-mb-sm">
              <q-item clickable v-ripple style="min-height: 35px;" to="/~/settings" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                  {{ $t('ProfileSettings') }}
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple style="min-height: 35px;" to="/~/important" active-class="bg-teal-2">
                <q-item-section class="q-ml-sm">
                    {{ $t('ImportantNumbers') }}
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple style="min-height: 35px;" @click="logoutUser">
                <q-item-section class="q-ml-sm">
                  {{ $t('LogOut') }}
                </q-item-section>
              </q-item>
            </div>
          </q-list>
        </div>

        <div class="absolute-top column items-center" active-class="bg-teal-2">
          <router-link to="/home">
            <q-img 
              width="170px"
              src="../assets/logo_bildemic.png" 
              class="q-mt-md" 
            /> 
          </router-link> 
        </div>
      </q-drawer>

      <q-page-container>
        <router-view @toggleDrawer="toggleDrawer"/>
      </q-page-container>
  </q-layout>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuasar } from 'quasar'
import LoginManager from '../classes/LoginManager.ts'
import { useRouter } from 'vue-router'

export default {
  name: 'BaseLayoutTab',

  setup() {
    const $q = useQuasar();
    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const drawer = ref(!isMobile.value);

    watch(isMobile, () => {
      drawer.value = !isMobile.value;
    })

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    }

    const lm = LoginManager.getInstance();
    const router = useRouter();

    const logoutUser = () => {
      lm.logout();
      router.push('/auth/login');
    }

    return {
      drawer,
      toggleDrawer,
      logoutUser
    }
  },
}
</script>

<style scoped>
.q-item {
  min-height: 40px;
}
</style>