<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-12 pb-5">
    <div
      v-for="(videoUrl, index) in videoUrls"
      :key="index"
      :ref="(el) => setVideoRef(index, el as HTMLDivElement)"
      :data-video-id="index"
      class="u-image-zoom-hover-container relative w-full h-80 rounded-lg shadow-lg video-item overflow-hidden bg-black"
      :style="{
        transform: `translateX(${index % 2 === 0 ? '-' : ''}1000px)`,
      }"
    >
      <button
        v-if="!loadedVideos[videoUrl]"
        type="button"
        class="group relative h-full w-full"
        :aria-label="`Play YouTube video ${index + 1}`"
        @click="loadVideo(videoUrl)"
      >
        <img
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          :src="getThumbnailUrl(videoUrl)"
          :alt="`YouTube video ${index + 1} thumbnail`"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"></div>
        <div
          class="absolute left-1/2 top-1/2 flex h-12 w-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[0.85rem] bg-[#ff0000] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#ff1a1a]"
        >
          <span
            class="ml-0.5 inline-block h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white"
            aria-hidden="true"
          ></span>
        </div>
      </button>

      <iframe
        v-else
        class="u-image-zoom-hover h-full w-full"
        :src="getEmbedUrl(videoUrl)"
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'

interface Props {
  videoUrls: string[]
}

defineProps<Props>()

const videoRefs = ref<Record<number, HTMLDivElement>>({})
const loadedVideos = ref<Record<string, boolean>>({})

const setVideoRef = (index: number, el: HTMLDivElement) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const loadVideo = (videoUrl: string) => {
  loadedVideos.value[videoUrl] = true
}

const getThumbnailUrl = (videoUrl: string) => {
  return `https://i.ytimg.com/vi/${videoUrl}/hqdefault.jpg`
}

const getEmbedUrl = (videoUrl: string) => {
  return `https://www.youtube-nocookie.com/embed/${videoUrl}?autoplay=1&rel=0`
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
