<template>
  <div
    ref="headerContainer"
    class="bg-cover bg-center bg-no-repeat flex items-center justify-center w-full h-screen"
    :style="{ backgroundImage: `url(${projectBg})` }"
  >
    <div
      class="bg-black opacity-30 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center"
    >
      <h1 class="text-4xl font-bold text-white mb-6 text-center">Long Vân Group</h1>

      <div class="space-y-4 text-white text-center max-w-2xl">
        <p ref="dissapearTextContainer" class="overflow-hidden">{{ dissapearTextContent }}</p>

        <p class="text-center">
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
      ref="video1"
      data-video-id="1"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(-1000px)"
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
      ref="video2"
      data-video-id="2"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(1000px)"
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
      ref="video3"
      data-video-id="3"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(-1000px)"
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
      ref="video4"
      data-video-id="4"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(1000px)"
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
      ref="video5"
      data-video-id="5"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(-1000px)"
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
      ref="video6"
      data-video-id="6"
      class="w-full h-64 rounded-lg shadow-lg video-item"
      style="transform: translateX(1000px)"
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

const headerContainer = ref<HTMLElement | null>(null)
const dissapearTextContainer = ref<HTMLElement | null>(null)

const video1 = ref<HTMLIFrameElement | null>(null)
const video2 = ref<HTMLIFrameElement | null>(null)
const video3 = ref<HTMLIFrameElement | null>(null)
const video4 = ref<HTMLIFrameElement | null>(null)
const video5 = ref<HTMLIFrameElement | null>(null)
const video6 = ref<HTMLIFrameElement | null>(null)

const textHolder =
  'Tôi tham gia phát triển nội dung truyền thông đa nền tảng, từ ý tưởng, xây dựng nội dung đến trực tiếp sản xuất hình ảnh và video. Quá trình này giúp tôi hiểu rõ hơn cách một thương hiệu công nghiệp xây dựng hình ảnh và truyền tải giá trị đến công chúng. Mỗi video hay hình ảnh không chỉ là nội dung truyền thông mà còn là cách kể câu chuyện về sản phẩm, con người và văn hóa doanh nghiệp. Đây cũng là giai đoạn tôi học cách kết hợp giữa tư duy Brand Communication và Media Production, để mỗi nội dung không chỉ đẹp mà còn phục vụ đúng mục tiêu truyền thông và góp phần xây dựng hình ảnh thương hiệu nhất quán'
const dissapearTextContent = ref<string>(textHolder)

// const animatedVideosTiming = [150, 650, 800]

const handleScroll = () => {
  if (window.scrollY > 150) {
    if (dissapearTextContainer.value) {
      animate(dissapearTextContainer.value, {
        opacity: 0,
        duration: 500,
        complete: () => {
          dissapearTextContent.value = ''
        },
      })
    }

    if (headerContainer.value) {
      animate(headerContainer.value, {
        scale: 0.6,
        // scaleY: 0.5,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  if (window.scrollY <= 150) {
    if (dissapearTextContainer.value) {
      animate(dissapearTextContainer.value, {
        opacity: 1,
        duration: 500,
        onBegin: () => {
          dissapearTextContent.value = textHolder
        },
      })
    }

    if (headerContainer.value) {
      animate(headerContainer.value, {
        scale: 1,
        // scaleY: 1,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  // Video 1 & 2 - animate at scrollY > 400
  if (window.scrollY > 400) {
    if (video1.value) {
      animate(video1.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video2.value) {
      animate(video2.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  if (window.scrollY <= 400) {
    if (video1.value) {
      animate(video1.value, {
        translateX: -1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video2.value) {
      animate(video2.value, {
        translateX: 1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  // Video 3 & 4 - animate at scrollY > 600
  if (window.scrollY > 600) {
    if (video3.value) {
      animate(video3.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video4.value) {
      animate(video4.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  if (window.scrollY <= 600) {
    if (video3.value) {
      animate(video3.value, {
        translateX: -1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video4.value) {
      animate(video4.value, {
        translateX: 1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  // Video 5 & 6 - animate at scrollY > 800
  if (window.scrollY > 800) {
    if (video5.value) {
      animate(video5.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video6.value) {
      animate(video6.value, {
        translateX: 0,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }

  if (window.scrollY <= 800) {
    if (video5.value) {
      animate(video5.value, {
        translateX: -1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }

    if (video6.value) {
      animate(video6.value, {
        translateX: 1000,
        duration: 500,
        easing: 'easeOutQuad',
      })
    }
  }
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
