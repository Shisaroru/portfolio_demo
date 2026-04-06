<script setup lang="ts">
import { ref } from 'vue'

const navItems = [
  {
    label: 'About me',
    to: '/',
  },
  {
    label: 'Works',
    children: [
      {
        label: 'Long Van Group',
        to: 'works/project-1',
      },
      {
        label: 'Ton Pomina',
        to: 'works/project-2',
      },
      {
        label: 'Sai Gon TV',
        to: 'works/project-3',
      },
    ],
  },
  {
    label: 'Achieve',
    to: 'achieve',
  },
  {
    label: 'Skill',
    to: 'skill',
  },
]

const isOpen = ref(false)

const mobileNavItems = navItems.map((item) => ({
  label: item.label,
  to: item.to,
  click: () => {
    isOpen.value = false
  },
}))
</script>

<template>
  <nav class="sticky top-0 z-50 bg-cream border-b-2 border-cream-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="shrink-0">
          <span class="font-kollektif text-2xl font-bold text-maroon">Portfolio</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <UNavigationMenu
            :items="navItems"
            orientation="horizontal"
            content-orientation="vertical"
          />
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="primary"
            variant="ghost"
            @click="isOpen = !isOpen"
            aria-label="Toggle navigation menu"
          />
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isOpen" class="md:hidden bg-cream-light border-t border-cream">
          <div class="px-4 py-4 space-y-2">
            <UButton
              v-for="item in mobileNavItems"
              :key="item.label"
              :to="item.to"
              variant="ghost"
              class="w-full justify-start font-cormorant text-lg text-maroon hover:bg-cream"
              @click="item.click"
            >
              {{ item.label }}
            </UButton>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
