<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNavigationStore } from '../stores/navigationStore'

const route = useRoute()
const navigationStore = useNavigationStore()
const page = ref<number>(0)

// Sync with store when route changes to ensure consistency
watch(
  () => route.name,
  (newRoute) => {
    if (newRoute === 'Achieve') {
      page.value = navigationStore.currentPage
    }
  },
  { immediate: true },
)

// Update store when page changes
watch(page, (newPage) => {
  navigationStore.setCurrentPage(newPage)
})
</script>

<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center bg-cream py-16 px-4 mt-24"
  >
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="flex min-h-112 flex-col transition-opacity duration-300 ease-out">
          <Transition name="page-fade" mode="out-in">
            <div
              :key="`${page}-${navigationStore.pagingContents[page]?.imageUrl}`"
              class="font-cormorant text-base leading-relaxed text-maroon font-semibold"
            >
              <template
                v-for="content in navigationStore.pagingContents[page]?.description"
                :key="content"
              >
                <li v-if="navigationStore.pagingContents[page]?.bullet">{{ content }}</li>
                <p class="my-1" v-else>{{ content }}</p>
              </template>
            </div>
          </Transition>

          <div class="mt-auto grid grid-cols-2 font-inter font-semibold pt-10">
            <div v-if="page === 0"></div>
            <UButton
              v-else
              variant="ghost"
              class="u-button-hover-neutral u-hover-zoom justify-self-start font-inter text-lg text-maroon"
              @click="page--"
            >
              BACK
            </UButton>

            <div v-if="page === navigationStore.pagingContents.length - 1"></div>
            <UButton
              v-else
              variant="ghost"
              class="u-button-hover-neutral u-hover-zoom justify-self-end font-inter text-lg text-maroon"
              @click="page++"
            >
              NEXT
            </UButton>
          </div>
        </div>

        <div class="hidden md:flex md:justify-center md:px-4">
          <Transition name="image-fade" mode="out-in">
            <div
              :key="navigationStore.pagingContents[page]?.imageUrl"
              class="u-image-zoom-hover-container w-full max-w-xl aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
            >
              <img
                class="u-image-zoom-hover h-full w-full object-contain object-center"
                :src="navigationStore.pagingContents[page]?.imageUrl"
                alt="Achievement image"
              />
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

.page-fade-enter-to,
.page-fade-leave-from {
  opacity: 1;
}

.image-fade-enter-active,
.image-fade-leave-active {
  transition: opacity 0.3s ease;
}

.image-fade-enter-from,
.image-fade-leave-to {
  opacity: 0;
}

.image-fade-enter-to,
.image-fade-leave-from {
  opacity: 1;
}
</style>
