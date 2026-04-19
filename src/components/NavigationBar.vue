<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const workChildren = [
  {
    label: 'Long Van Group',
    to: '/works/1',
  },
  {
    label: 'Ton Pomina',
    to: '/works/2',
  },
  {
    label: 'Sai Gon TV',
    to: '/works/3',
  },
]

const navItems = computed(() => [
  {
    label: 'About me',
    to: '/',
  },
  {
    label: 'Works',
    active: route.path.startsWith('/works'),
    children: workChildren,
  },
  {
    label: 'Achieve',
    to: '/achieve',
  },
  {
    label: 'Skill',
    to: '/skill',
  },
])

const isOpen = ref(false)

const navigationMenuUi = {
  link: 'px-5 font-cormorant text-lg',
  childLink: 'font-cormorant',
  childLinkLabel: 'font-cormorant text-base',
  childDescription: 'font-cormorant',
}

const mobileNavItems = computed(() =>
  navItems.value.map((item) => ({
    label: item.label,
    to: item.to ?? item.children?.[0]?.to,
    click: () => {
      isOpen.value = false
    },
  })),
)
</script>

<template>
  <nav class="sticky top-0 z-50 bg-cream border-b-2 border-cream-light">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo/Brand -->
        <div class="shrink-0">
          <span class="font-kollektif text-2xl font-bold text-maroon"></span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <UNavigationMenu
            :items="navItems"
            :ui="navigationMenuUi"
            orientation="horizontal"
            content-orientation="vertical"
          >
            <template #item-label="{ item, active }">
              <span
                class="font-cormorant text-lg transition-colors"
                :class="active ? 'text-white' : 'text-maroon'"
              >
                {{ item.label }}
              </span>
            </template>
            <template #item-trailing="{ item, active }">
              <UIcon
                v-if="item.children?.length"
                name="i-heroicons-chevron-down-20-solid"
                class="size-5 shrink-0 transition-[color,transform] duration-200 group-data-[state=open]:rotate-180"
                :class="active ? 'text-white' : 'text-maroon'"
              />
            </template>
          </UNavigationMenu>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <UButton
            icon="i-heroicons-bars-3"
            color="primary"
            variant="ghost"
            class="u-button-hover-neutral"
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
              class="u-button-hover-neutral w-full justify-start font-cormorant text-lg text-maroon"
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
