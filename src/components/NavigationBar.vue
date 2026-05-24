<script setup lang="ts">
import { animate, stagger } from 'animejs'
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
  {
    label: 'Education',
    to: '/education',
  },
])

const isOpen = ref(false)

const navigationMenuUi = {
  link: 'px-5 font-cormorant text-lg',
  childLink: 'font-cormorant',
  childLinkLabel: 'font-cormorant text-base',
  childDescription: 'font-cormorant',
}

const mobileButtonUi = {
  base: 'text-maroon data-[state=open]:text-white',
  label: 'font-cormorant text-lg text-current',
  leadingIcon: 'text-current',
  trailingIcon: 'text-current',
}

const isMobileItemActive = (to?: string) => {
  return to ? route.path === to : false
}

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMobileMenu = () => {
  isOpen.value = false
}

const handleMobileMenuEnter = (element: Element, done: () => void) => {
  const htmlElement = element as HTMLElement
  const items = htmlElement.querySelectorAll<HTMLElement>('[data-mobile-nav-item]')

  htmlElement.style.overflow = 'hidden'
  htmlElement.style.height = '0px'
  htmlElement.style.opacity = '0'

  items.forEach((item) => {
    item.style.opacity = '0'
    item.style.transform = 'translateY(-16px)'
  })

  animate(htmlElement, {
    height: [0, htmlElement.scrollHeight],
    opacity: [0, 1],
    duration: 520,
    ease: 'outExpo',
    onComplete: () => {
      htmlElement.style.height = 'auto'
      htmlElement.style.opacity = '1'
      htmlElement.style.overflow = 'visible'
      done()
    },
  })

  animate(items, {
    translateY: [-16, 0],
    opacity: [0, 1],
    delay: stagger(55, { start: 120 }),
    duration: 420,
    ease: 'outCubic',
  })
}

const handleMobileMenuLeave = (element: Element, done: () => void) => {
  const htmlElement = element as HTMLElement
  const items = htmlElement.querySelectorAll<HTMLElement>('[data-mobile-nav-item]')

  htmlElement.style.overflow = 'hidden'
  htmlElement.style.height = `${htmlElement.scrollHeight}px`

  animate(items, {
    translateY: [0, -10],
    opacity: [1, 0],
    delay: stagger(35, { from: 'last' }),
    duration: 180,
    ease: 'inQuad',
  })

  animate(htmlElement, {
    height: [htmlElement.scrollHeight, 0],
    opacity: [1, 0],
    duration: 300,
    ease: 'inOutCubic',
    onComplete: () => {
      done()
    },
  })
}
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
            :ui="mobileButtonUi"
            color="neutral"
            variant="ghost"
            active-color="neutral"
            class="text-maroon hover:bg-maroon hover:text-white"
            @click="toggleMobileMenu"
            aria-label="Toggle navigation menu"
          />
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <Transition
        :css="false"
        @enter="handleMobileMenuEnter"
        @leave="handleMobileMenuLeave"
      >
        <div
          v-if="isOpen"
          class="md:hidden bg-cream-light border-t border-cream"
        >
          <div class="px-4 py-4 space-y-2">
            <div
              v-for="item in navItems"
              :key="item.label"
              class="space-y-2"
              data-mobile-nav-item
            >
              <UButton
                v-if="item.to"
                :to="item.to"
                :active="item.active ?? isMobileItemActive(item.to)"
                :ui="mobileButtonUi"
                color="neutral"
                variant="ghost"
                active-color="neutral"
                active-class="bg-maroon text-white"
                inactive-class="text-maroon"
                class="w-full justify-start font-cormorant text-lg hover:bg-maroon hover:text-white"
                @click="closeMobileMenu"
              >
                {{ item.label }}
              </UButton>

              <div v-else-if="item.children?.length" class="space-y-2">
                <div
                  class="px-5 pt-2 font-cormorant text-lg font-semibold text-maroon/80"
                >
                  {{ item.label }}
                </div>

                <UButton
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  :active="isMobileItemActive(child.to)"
                  :ui="mobileButtonUi"
                  color="neutral"
                  variant="ghost"
                  active-color="neutral"
                  active-class="bg-maroon text-white"
                  inactive-class="text-maroon"
                  class="w-full justify-start pl-8 font-cormorant text-lg hover:bg-maroon hover:text-white"
                  @click="closeMobileMenu"
                >
                  {{ child.label }}
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>
