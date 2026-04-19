<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-12 pb-5">
    <iframe
      v-for="(videoUrl, index) in videoUrls"
      :key="index"
      :ref="(el) => setVideoRef(index, el as HTMLIFrameElement)"
      :data-video-id="index"
      class="w-full h-80 rounded-lg shadow-lg video-item"
      :style="{
        transform: `translateX(${index % 2 === 0 ? '-' : ''}1000px)`,
      }"
      :src="`https://www.youtube.com/embed/${videoUrl}`"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

interface Props {
  videoUrls: string[]
}

defineProps<Props>()

const videoRefs = ref<Record<number, HTMLIFrameElement>>({})
const triggerViewportFactor = 1.05

const setVideoRef = (index: number, el: HTMLIFrameElement) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const handleScroll = () => {
  Object.entries(videoRefs.value).forEach(([indexStr, video]) => {
    const index = parseInt(indexStr)

    // Determine scroll threshold for this pair (every 2 videos)
    // Pair 0 (videos 0,1) at 400, Pair 1 (videos 2,3) at 600, etc.
    const pairIndex = Math.floor(index / 2)
    const scrollThreshold = 400 + pairIndex * 350

    // Determine initial transform direction (even indices go left, odd go right)
    const initialTranslate = index % 2 === 0 ? -1000 : 1000

    if (window.scrollY > scrollThreshold) {
      animate(video, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    } else {
      animate(video, {
        translateX: initialTranslate,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
