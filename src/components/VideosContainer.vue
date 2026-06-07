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
        v-if="isYoutubeVideo(videoUrl) && !loadedVideos[getVideoKey(videoUrl, index)]"
        type="button"
        class="group relative h-full w-full"
        :aria-label="`Play ${getVideoTitle(videoUrl, index)}`"
        @click="loadVideo(videoUrl, index)"
      >
        <img
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          :src="getThumbnailUrl(videoUrl)"
          :alt="`${getVideoTitle(videoUrl, index)} thumbnail`"
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
        :title="getVideoTitle(videoUrl, index)"
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

type VideoSource =
  | string
  | {
      type: 'youtube' | 'facebook' | 'drive'
      url: string
      title?: string
    }

interface Props {
  videoUrls: VideoSource[]
}

defineProps<Props>()

const videoRefs = ref<Record<number, HTMLDivElement>>({})
const loadedVideos = ref<Record<string, boolean>>({})

const setVideoRef = (index: number, el: HTMLDivElement) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const loadVideo = (videoUrl: VideoSource, index: number) => {
  loadedVideos.value[getVideoKey(videoUrl, index)] = true
}

const getVideoUrl = (videoUrl: VideoSource) => {
  return typeof videoUrl === 'string' ? videoUrl : videoUrl.url
}

const getVideoType = (videoUrl: VideoSource) => {
  if (typeof videoUrl !== 'string') {
    return videoUrl.type
  }

  return 'youtube'
}

const getYoutubeId = (videoUrl: VideoSource) => {
  const url = getVideoUrl(videoUrl)
  const watchMatch = url.match(/[?&]v=([^&]+)/)
  const shortMatch = url.match(/youtu\.be\/([^?&]+)/)
  const embedMatch = url.match(/embed\/([^?&]+)/)

  return watchMatch?.[1] || shortMatch?.[1] || embedMatch?.[1] || url
}

const getDrivePreviewUrl = (url: string) => {
  const fileMatch = url.match(/\/file\/d\/([^/]+)/)
  const idMatch = url.match(/[?&]id=([^&]+)/)
  const fileId = fileMatch?.[1] || idMatch?.[1]

  return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url
}

const getVideoKey = (videoUrl: VideoSource, index: number) => {
  return `${index}-${getVideoUrl(videoUrl)}`
}

const getVideoTitle = (videoUrl: VideoSource, index: number) => {
  return typeof videoUrl === 'string' ? `Video ${index + 1}` : videoUrl.title || `Video ${index + 1}`
}

const isYoutubeVideo = (videoUrl: VideoSource) => {
  return getVideoType(videoUrl) === 'youtube'
}

const getThumbnailUrl = (videoUrl: VideoSource) => {
  return `https://i.ytimg.com/vi/${getYoutubeId(videoUrl)}/hqdefault.jpg`
}

const getEmbedUrl = (videoUrl: VideoSource) => {
  const url = getVideoUrl(videoUrl)

  if (getVideoType(videoUrl) === 'facebook') {
    return url
  }

  if (getVideoType(videoUrl) === 'drive') {
    return getDrivePreviewUrl(url)
  }

  return `https://www.youtube-nocookie.com/embed/${getYoutubeId(videoUrl)}?autoplay=1&rel=0`
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
