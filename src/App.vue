<script setup lang="ts">
import { watch, ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { animate } from 'animejs'
import NavigationBar from '@/components/NavigationBar.vue'
import Footer from '@/components/FooterComponent.vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import { useNavigationStore } from '@/stores/navigationStore'

const route = useRoute()
const router = useRouter()
const navigationStore = useNavigationStore()
const transitionImageContainer = ref<HTMLElement | null>(null)
const isAnimating = ref(false)
const prevRoute = ref<string | null>(null)
const showTransitionImage = ref(false)
const transitionImageUrl = ref<string | null>(null)
const suppressDefaultImageTransition = ref(false)
const routeContent = ref<HTMLElement | null>(null)
const isAppLoading = ref(true)
const showLoadingScreen = ref(true)

const shouldShowImage = () => {
  return route.name === 'Achieve' || route.name === 'Skill'
}

const getCurrentImageUrl = () => {
  if (route.name === 'Skill') {
    return navigationStore.pagingContents[navigationStore.pagingContents.length - 1]?.imageUrl || ''
  }
  return navigationStore.pagingContents[navigationStore.currentPage]?.imageUrl || ''
}

const isImageOnRight = computed(() => {
  return route.name === 'Achieve'
})

const imageWrapperClasses = computed(() => {
  return isImageOnRight.value ? 'md:right-4 lg:right-8' : 'md:left-4 lg:left-8'
})

const shouldShowDefaultImage = computed(() => {
  return shouldShowImage() && !(showTransitionImage.value && route.name === 'Skill')
})

const shouldHideDefaultImage = computed(() => {
  return showTransitionImage.value && route.name === 'Achieve'
})

const shouldRenderTransitionImage = computed(() => {
  return (
    showTransitionImage.value &&
    !!transitionImageUrl.value &&
    (route.name === 'Achieve' || route.name === 'Skill')
  )
})

const defaultImageTransitionName = computed(() => {
  return suppressDefaultImageTransition.value ? 'no-fade' : 'fade'
})

const handleAppReady = () => {
  isAppLoading.value = false
}

const handleLoadingScreenComplete = () => {
  showLoadingScreen.value = false
}

const resetTransitionImage = () => {
  if (transitionImageContainer.value) {
    transitionImageContainer.value.style.transform = 'translateX(0)'
    transitionImageContainer.value.style.opacity = '1'
  }
}

const handleImageClick = async () => {
  const isLastAchieve =
    route.name === 'Achieve' &&
    navigationStore.currentPage === navigationStore.pagingContents.length - 1

  if (isLastAchieve && !isAnimating.value) {
    isAnimating.value = true
    navigationStore.setAchieveExiting(true)
    suppressDefaultImageTransition.value = true
    transitionImageUrl.value = getCurrentImageUrl()
    showTransitionImage.value = true

    await nextTick()

    if (!transitionImageContainer.value) {
      isAnimating.value = false
      showTransitionImage.value = false
      transitionImageUrl.value = null
      return
    }

    animate(transitionImageContainer.value, {
      translateX: -700,
      opacity: 100,
      duration: 800,
      easing: 'easeInOutQuad',
      onComplete: () => {
        navigationStore.setFromAchieve(true)
        router.push('/skill')
      },
    })
  }
}

watch(
  () => route.name,
  (newRoute) => {
    // Reset animation state when route changes
    if (newRoute === 'Skill') {
      isAnimating.value = false
      navigationStore.setAchieveExiting(false)
    } else if (newRoute === 'Achieve') {
      isAnimating.value = false
      navigationStore.setAchieveExiting(false)
      resetTransitionImage()
      showTransitionImage.value = false
      transitionImageUrl.value = null
      suppressDefaultImageTransition.value = false
    } else {
      navigationStore.setAchieveExiting(false)
      isAnimating.value = false
      resetTransitionImage()
      showTransitionImage.value = false
      transitionImageUrl.value = null
      suppressDefaultImageTransition.value = false
    }
    prevRoute.value = newRoute as string
  },
  { immediate: true },
)
</script>

<template>
  <UApp>
    <div
      class="bg-cream min-h-screen flex flex-col transition-opacity duration-500"
      :class="isAppLoading ? 'pointer-events-none select-none opacity-0' : 'opacity-100'"
      :aria-busy="isAppLoading"
    >
      <NavigationBar />
      <div class="relative flex-1">
        <Transition :name="defaultImageTransitionName" mode="out-in">
          <div
            v-if="shouldShowDefaultImage"
            :key="`${String(route.name)}-${getCurrentImageUrl()}`"
            class="pointer-events-none hidden md:flex md:absolute md:top-32 md:w-1/2 md:justify-center md:px-4"
            :class="imageWrapperClasses"
          >
            <div
              class="pointer-events-auto u-image-zoom-hover-container w-full max-w-xl aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
              :class="{
                'cursor-pointer':
                  route.name === 'Achieve' &&
                  navigationStore.currentPage === navigationStore.pagingContents.length - 1,
                invisible: shouldHideDefaultImage,
              }"
              @click="handleImageClick"
            >
              <img
                class="u-image-zoom-hover h-full w-full object-contain object-center"
                :src="getCurrentImageUrl()"
                alt="Achievement image"
              />
            </div>
          </div>
        </Transition>

        <div
          v-if="shouldRenderTransitionImage"
          class="pointer-events-none hidden md:flex md:absolute md:top-32 md:right-4 md:w-1/2 md:justify-center md:px-4 lg:right-8"
        >
          <div
            ref="transitionImageContainer"
            class="pointer-events-auto u-image-zoom-hover-container w-full max-w-xl aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
          >
            <img
              class="u-image-zoom-hover h-full w-full object-contain object-center"
              :src="transitionImageUrl || ''"
              alt="Achievement image"
            />
          </div>
        </div>

        <div ref="routeContent" class="flex-1">
          <Transition name="fade" mode="out-in">
            <RouterView :key="route.fullPath" />
          </Transition>
        </div>
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

.no-fade-enter-active,
.no-fade-leave-active {
  transition: none;
}

.no-fade-enter-from,
.no-fade-leave-to,
.no-fade-enter-to,
.no-fade-leave-from {
  opacity: 1;
}
</style>
