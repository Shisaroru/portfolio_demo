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
import ProjectBanner from '@/components/ProjectBanner.vue'
import VideoContainer from '@/components/VideosContainer.vue'

import projectBg from '@/assets/images/project_bg_1.png'

const title = 'SaigonTV'
const videoUrls = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'eY52Zsg-KVI', 'DLzxrzFCyOs', '9bZkp7q19f0']
const mainTextContent =
  'Truyền hình là nơi tôi bắt đầu hành trình kể chuyện bằng hình ảnh và cũng là nơi cho tôi nhiều trải nghiệm mới mẻ. Tham gia sản xuất các chương trình phóng sự và tin tức giúp tôi học được cách quan sát cuộc sống, từ đó tìm kiếm những câu chuyện ý nghĩa và biến chúng thành những thông điệp tích cực, truyền cảm hứng cho người xem. Chính nền tảng báo chí này đã giúp tôi hình thành tư duy Storytelling, tư duy sáng tạo nội dung, điều vẫn tiếp tục theo tôi trong hành trình làm truyền thông thương hiệu sau này.'

const textHolder = ''
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
