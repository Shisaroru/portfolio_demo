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

const title = 'Long Vân Group'
const videoUrls = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'eY52Zsg-KVI', 'DLzxrzFCyOs', '9bZkp7q19f0']
const mainTextContent =
  'I have been involved in developing multi-platform communication content, from ideation and content development to hands-on production of visuals and videos. This experience has given me a deeper understanding of how an industrial brand builds its image and communicates its values to the public. Each video or visual is not just a piece of content, but a way of telling the story of the product, the people, and the corporate culture behind it. This phase also allowed me to learn how to integrate Brand Communication with Media Production, ensuring that every piece of content is not only visually compelling but also aligned with communication objectives and contributes to a consistent brand image.'

const textHolder =
  'Tôi tham gia phát triển nội dung truyền thông đa nền tảng, từ ý tưởng, xây dựng nội dung đến trực tiếp sản xuất hình ảnh và video. Quá trình này giúp tôi hiểu rõ hơn cách một thương hiệu công nghiệp xây dựng hình ảnh và truyền tải giá trị đến công chúng. Mỗi video hay hình ảnh không chỉ là nội dung truyền thông mà còn là cách kể câu chuyện về sản phẩm, con người và văn hóa doanh nghiệp. Đây cũng là giai đoạn tôi học cách kết hợp giữa tư duy Brand Communication và Media Production, để mỗi nội dung không chỉ đẹp mà còn phục vụ đúng mục tiêu truyền thông và góp phần xây dựng hình ảnh thương hiệu nhất quán'
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
