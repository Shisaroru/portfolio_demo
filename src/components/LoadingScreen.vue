<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits<{
  ready: []
  complete: []
}>()

const router = useRouter()
const minimumDisplayDuration = 3000
const youtubeEmbedTimeout = 8000
const blindCount = 10
const blindAnimationDuration = 750
const blindStaggerDelay = 70
const blindsRevealDuration = blindAnimationDuration + blindStaggerDelay * (blindCount - 1)
const preloadVideoIds = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'eY52Zsg-KVI', 'DLzxrzFCyOs', '9bZkp7q19f0']
const preloadFrameRefs = ref<Record<number, HTMLIFrameElement>>({})
const isRevealing = ref(false)

const waitForWindowLoad = () => {
  if (document.readyState === 'complete') {
    return Promise.resolve()
  }

  return new Promise<void>((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true })
  })
}

const waitForFonts = () => {
  if ('fonts' in document) {
    return document.fonts.ready.then(() => undefined)
  }

  return Promise.resolve()
}

const waitForPaint = async (frames = 2) => {
  for (let index = 0; index < frames; index += 1) {
    await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
  }
}

const waitForMinimumDuration = () => {
  return new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), minimumDisplayDuration)
  })
}

const setPreloadFrameRef = (index: number, el: HTMLIFrameElement | null) => {
  if (el) {
    preloadFrameRefs.value[index] = el
    return
  }

  delete preloadFrameRefs.value[index]
}

const waitForYoutubeEmbeds = () => {
  return Promise.all(
    preloadVideoIds.map((_, index) => {
      return new Promise<void>((resolve) => {
        const frame = preloadFrameRefs.value[index]

        if (!frame) {
          resolve()
          return
        }

        let isResolved = false
        const finish = () => {
          if (isResolved) return
          isResolved = true
          resolve()
        }

        frame.addEventListener('load', finish, { once: true })
        frame.addEventListener('error', finish, { once: true })
        window.setTimeout(finish, youtubeEmbedTimeout)
      })
    }),
  )
}

const lockScroll = () => {
  document.body.style.overflow = 'hidden'
}

const unlockScroll = () => {
  document.body.style.overflow = ''
}

onMounted(async () => {
  lockScroll()

  await router.isReady()
  await nextTick()
  await Promise.all([
    waitForWindowLoad(),
    waitForFonts(),
    waitForMinimumDuration(),
    waitForYoutubeEmbeds(),
  ])
  await waitForPaint(2)

  emit('ready')
  await nextTick()
  await waitForPaint(1)

  isRevealing.value = true

  window.setTimeout(() => {
    unlockScroll()
    emit('complete')
  }, blindsRevealDuration)
})

onBeforeUnmount(() => {
  unlockScroll()
})
</script>

<template>
  <div class="absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none">
    <iframe
      v-for="(videoId, index) in preloadVideoIds"
      :key="videoId"
      :ref="(el) => setPreloadFrameRef(index, el as HTMLIFrameElement | null)"
      :src="`https://www.youtube.com/embed/${videoId}`"
      loading="eager"
      tabindex="-1"
      aria-hidden="true"
      title="Preloading YouTube video"
    ></iframe>
  </div>

  <Transition name="loader-fade">
    <div
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-cream px-6"
      :class="{ 'loader-revealing': isRevealing }"
      aria-live="polite"
      aria-label="Loading site"
    >
      <div class="loader-blinds" aria-hidden="true">
        <span
          v-for="index in blindCount"
          :key="index"
          class="loader-blind"
          :style="{
            '--blind-index': index - 1,
            '--blind-animation-duration': `${blindAnimationDuration}ms`,
            '--blind-stagger-delay': `${blindStaggerDelay}ms`,
          }"
        ></span>
      </div>

      <div class="loader-content flex w-full max-w-md flex-col items-center gap-6 text-center">
        <p class="font-kollektif text-3xl uppercase tracking-[0.35em] text-maroon">Portfolio</p>
        <div class="h-px w-full overflow-hidden bg-maroon/15">
          <div class="loader-bar h-full bg-maroon"></div>
        </div>
        <p class="font-cormorant text-lg italic text-maroon/80">
          Preparing fonts, motion, layout, and video embeds...
        </p>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loader-fade-enter-active,
.loader-fade-leave-active {
  transition: opacity 0.5s ease;
}

.loader-fade-enter-from,
.loader-fade-leave-to {
  opacity: 0;
}

.loader-fade-enter-to,
.loader-fade-leave-from {
  opacity: 1;
}

.loader-bar {
  animation: loader-progress 1.25s ease-in-out infinite;
  transform-origin: left center;
}

.loader-blinds {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  pointer-events: none;
  z-index: 0;
}

.loader-blind {
  background: #f4ecde;
  transform-origin: top center;
}

.loader-content {
  position: relative;
  z-index: 1;
}

.loader-revealing > :not(.loader-blinds) {
  opacity: 0;
  transform: scale(0.96);
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.loader-revealing .loader-blind {
  animation: blind-open var(--blind-animation-duration) cubic-bezier(0.76, 0, 0.24, 1)
    forwards;
  animation-delay: calc(var(--blind-index) * var(--blind-stagger-delay));
}

@keyframes loader-progress {
  0% {
    transform: translateX(-100%) scaleX(0.2);
  }

  50% {
    transform: translateX(0%) scaleX(0.85);
  }

  100% {
    transform: translateX(100%) scaleX(0.2);
  }
}

@keyframes blind-open {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}
</style>
