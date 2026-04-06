<template>
  <div
    class="bg-cover bg-center bg-no-repeat flex items-center justify-center transition-all duration-500"
    :class="isScrolled ? 'h-[40vh] w-[80%] mx-auto rounded-lg' : 'w-full min-h-screen'"
    :style="{ backgroundImage: `url(${projectBg})` }"
  >
    <div
      class="bg-black opacity-30 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center transition-all duration-500"
      :class="{ 'py-4': isScrolled }"
    >
      <h1
        class="text-4xl font-bold text-white mb-6 text-center transition-all duration-500"
        :class="{ 'text-2xl mb-3': isScrolled }"
      >
        Long Vân Group
      </h1>

      <div class="space-y-4 text-white text-center transition-all duration-500 max-w-2xl">
        <p
          class="transition-all duration-500 overflow-hidden"
          :class="{ 'max-h-0 opacity-0': isScrolled }"
        >
          Tôi tham gia phát triển nội dung truyền thông đa nền tảng, từ ý tưởng, xây dựng nội dung
          đến trực tiếp sản xuất hình ảnh và video. Quá trình này giúp tôi hiểu rõ hơn cách một
          thương hiệu công nghiệp xây dựng hình ảnh và truyền tải giá trị đến công chúng. Mỗi video
          hay hình ảnh không chỉ là nội dung truyền thông mà còn là cách kể câu chuyện về sản phẩm,
          con người và văn hóa doanh nghiệp. Đây cũng là giai đoạn tôi học cách kết hợp giữa tư duy
          Brand Communication và Media Production, để mỗi nội dung không chỉ đẹp mà còn phục vụ đúng
          mục tiêu truyền thông và góp phần xây dựng hình ảnh thương hiệu nhất quán
        </p>

        <p class="transition-all duration-500">
          I have been involved in developing multi-platform communication content, from ideation and
          content development to hands-on production of visuals and videos. This experience has
          given me a deeper understanding of how an industrial brand builds its image and
          communicates its values to the public. Each video or visual is not just a piece of
          content, but a way of telling the story of the product, the people, and the corporate
          culture behind it. This phase also allowed me to learn how to integrate Brand
          Communication with Media Production, ensuring that every piece of content is not only
          visually compelling but also aligned with communication objectives and contributes to a
          consistent brand image.
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-12">
    <iframe
      data-video-id="1"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_1"
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
    <iframe
      data-video-id="2"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_2"
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
    <iframe
      data-video-id="3"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_2"
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
    <iframe
      data-video-id="4"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_2"
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
    <iframe
      data-video-id="5"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_2"
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
    <iframe
      data-video-id="6"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      src="https://www.youtube.com/embed/VIDEO_ID_2"
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

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { animate } from 'animejs'
import projectBg from '@/assets/images/project_bg_1.png'

const isScrolled = ref(false)
const animatedVideos = new Set<Element>()
const currentAnimations = new Map<Element, any>()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 150

  const videos = document.querySelectorAll('.video-item')
  videos.forEach((video, index) => {
    const rect = video.getBoundingClientRect()
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
    const isLeftColumn = index % 2 === 0
    const targetX = isLeftColumn ? -1000 : 1000

    if (isInViewport && !animatedVideos.has(video)) {
      // Animate in
      animatedVideos.add(video)
      if (currentAnimations.has(video)) {
        currentAnimations.get(video).pause()
      }
      const anim = animate(video, {
        translateX: [targetX, 0],
        duration: 1000,
        easing: 'easeOutQuad',
      })
      currentAnimations.set(video, anim)
    } else if (!isInViewport && animatedVideos.has(video)) {
      // Animate out
      animatedVideos.delete(video)
      if (currentAnimations.has(video)) {
        currentAnimations.get(video).pause()
      }
      const anim = animate(video, {
        translateX: [0, targetX],
        duration: 1000,
        easing: 'easeOutQuad',
      })
      currentAnimations.set(video, anim)
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

<style scoped>
/* Additional styling can be added here if needed */
</style>
