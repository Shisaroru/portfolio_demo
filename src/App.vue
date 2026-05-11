<script setup lang="ts">
import { ref } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/FooterComponent.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'

const isAppLoading = ref(true)
const showLoadingScreen = ref(true)
const cachedViewNames = ['LongVanView', 'PoniaView', 'SaiGonTVView']

const handleAppReady = () => {
  isAppLoading.value = false
}

const handleLoadingScreenComplete = () => {
  showLoadingScreen.value = false
}
</script>

<template>
  <UApp>
    <div
      class="bg-cream min-h-screen flex flex-col transition-opacity duration-500"
      :class="isAppLoading ? 'pointer-events-none select-none opacity-0' : 'opacity-100'"
      :aria-busy="isAppLoading"
    >
      <NavigationBar />
      <div class="flex-1">
        <RouterView v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <KeepAlive :include="cachedViewNames">
              <component :is="Component" />
            </KeepAlive>
          </Transition>
        </RouterView>
      </div>
      <Footer />
    </div>

    <LoadingScreen
      v-if="showLoadingScreen"
      @ready="handleAppReady"
      @complete="handleLoadingScreenComplete"
    />
  </UApp>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

</style>
