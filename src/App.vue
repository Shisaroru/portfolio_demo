<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/FooterComponent.vue'

const route = useRoute()
</script>

<template>
  <UApp>
    <div class="bg-cream min-h-screen flex flex-col">
      <NavigationBar />
      <div class="flex-1 flex">
        <!-- Persistent Image Container -->
        <div
          v-if="route.name === 'Skill'"
          class="hidden md:flex md:w-1/2 items-center justify-center px-4"
        >
          <div
            class="w-full aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
          >
            <img class="w-100" src="/src/assets/images/achieve_3.png" alt="Skill image" />
          </div>
        </div>

        <!-- Router View -->
        <div
          :class="{
            'md:w-1/2': route.name === 'Skill',
            'w-full': route.name !== 'Skill',
          }"
          class="flex-1"
        >
          <Transition name="fade" mode="out-in">
            <RouterView />
          </Transition>
        </div>
      </div>
      <Footer />
    </div>
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
