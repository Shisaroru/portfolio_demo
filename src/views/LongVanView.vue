<template>
  <div>
    <ProjectBanner
      :project-bg="projectBg"
      :title="title"
      :text-content="textHolder"
      :main-text-content="mainTextContent"
    ></ProjectBanner>
    <VideoContainer :video-urls="videoUrls"></VideoContainer>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'LongVanView',
})

import ProjectBanner from '@/components/ProjectBanner.vue'
import VideoContainer from '@/components/VideosContainer.vue'

import projectBg from '@/assets/images/project_bg_1.png'

type VideoSource = {
  type: 'youtube' | 'facebook' | 'drive'
  url: string
  title: string
}

const title = 'Long Vân Group'
const videoUrls: VideoSource[] = [
  {
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=4mj8UsQ1HlA',
    title: 'Long Van Group YouTube video',
  },
  {
    type: 'facebook',
    url: 'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Flongvangroup.com.vn%2Fvideos%2F475195578289647%2F&show_text=false&width=560&t=0',
    title: 'Long Van Group Facebook video',
  },
  {
    type: 'drive',
    url: 'https://drive.google.com/file/d/1kyoKcQLCizLRviFxBN0WqJbVq4wIHjY-/view',
    title: 'Long Van Group video 3',
  },
  {
    type: 'drive',
    url: 'https://drive.google.com/file/d/13JR54YZsrRQVph3WgPYQ3IQt7SQPt1q2',
    title: 'Long Van Group video 4',
  },
]
const mainTextContent =
  'Tôi tham gia phát triển nội dung truyền thông đa nền tảng, từ ý tưởng, xây dựng nội dung đến trực tiếp sản xuất hình ảnh và video. Quá trình này giúp tôi hiểu rõ hơn cách một thương hiệu công nghiệp xây dựng hình ảnh và truyền tải giá trị đến công chúng. Mỗi video hay hình ảnh không chỉ là nội dung truyền thông mà còn là cách kể câu chuyện về sản phẩm, con người và văn hóa doanh nghiệp. Đây cũng là giai đoạn tôi học cách kết hợp giữa tư duy Brand Communication và Media Production, để mỗi nội dung không chỉ đẹp mà còn phục vụ đúng mục tiêu truyền thông và góp phần xây dựng hình ảnh thương hiệu nhất quán.'

const textHolder = ''
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
