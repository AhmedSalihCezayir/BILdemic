<template>
  <q-layout view="hHh Lpr lff" class="shadow-2 rounded-borders">
      <q-drawer
        v-model="drawer"
        :width="200"
        bordered
        behavior="desktop"
      >
        <div class="absolute-top bg-teal-3 column justify-center items-center" style="height: 240px">
          <router-link to="/home">
            <q-img 
              width="110px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" 
              class="q-mb-md"
            />
          </router-link>
          <q-avatar size="70px" class="q-mb-sm bg-white">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png">
          </q-avatar>
          <div class="text-weight-bold text-white">Sponge Bob</div>
          <div class="text-weight-bold text-white">21802918</div>
          <div class="text-weight-bold text-white">HES: DF72-ACA3-43</div>
        </div>

        <div style="height: calc(100% - 240px); margin-top: 240px;">
          <q-list class="fixed-bottom q-mb-sm">
            <q-item clickable v-ripple to="/settings">
              <q-item-section class="q-ml-sm">
                {{ $t('ProfileSettings') }}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/important">
              <q-item-section class="q-ml-sm">
                {{ $t('ImportantNumbers') }}
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple @click="logoutUser">
              <q-item-section class="q-ml-sm">
                {{ $t('LogOut') }}
              </q-item-section>
            </q-item>
          </q-list>
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
import LoginManager from '../classes/LoginManager'
import { useRouter } from 'vue-router'

export default {
  name: 'BaseLayoutPhoto',

  setup() {
    const $q = useQuasar();
    const isMobile = computed(() => {
      return $q.screen.width < 800;
    });

    const drawer = ref(!isMobile.value);
    const lm = LoginManager.getInstance();
    const router = useRouter();

    watch(isMobile, () => {
      drawer.value = !isMobile.value;
    })

    const toggleDrawer = () => {
      drawer.value = !drawer.value
    }
    
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