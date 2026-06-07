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
  name: 'SaiGonTVView',
})

import ProjectBanner from '@/components/ProjectBanner.vue'
import VideoContainer from '@/components/VideosContainer.vue'

import projectBg from '@/assets/images/project_bg_3.png'

type VideoSource =
  | string
  | {
      type: 'youtube' | 'facebook' | 'drive'
      url: string
      title: string
    }

const title = 'SaigonTV'
const videoUrls: VideoSource[] = [
  'https://www.youtube.com/watch?si=61hHOJWaX0OQ0Ck3&v=8KD63itnz4g&feature=youtu.be',
  'https://youtu.be/rok8vDrZsAM?si=SjUAlmID3_z2RyMk',
  'https://youtu.be/EyN7ECMCm2Q',
  'https://youtu.be/zVLYIFO4-L0?si=QO1BLqM66hgC2NjB',
  'https://youtu.be/0zs_KiS8hSc?si=EyEmqPdbU4dgZbnN',
  {
    type: 'facebook',
    url: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FMnewsvn%2Fvideos%2F629092794724698%2F&show_text=false&width=476&t=0',
    title: 'SaigonTV Facebook video',
  },
]
const mainTextContent =
  'Chính nền tảng báo chí này đã giúp tôi hình thành tư duy Storytelling, tư duy sáng tạo nội dung, điều vẫn tiếp tục theo tôi trong hành trình làm truyền thông thương hiệu sau này.'

const textHolder =
  'Truyền hình là nơi tôi bắt đầu hành trình kể chuyện bằng hình ảnh và cũng là nơi cho tôi nhiều trải nghiệm mới mẻ. Tham gia sản xuất các chương trình phóng sự và tin tức giúp tôi học được cách quan sát cuộc sống, từ đó tìm kiếm những câu chuyện ý nghĩa và biến chúng thành những thông điệp tích cực, truyền cảm hứng cho người xem. '
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
