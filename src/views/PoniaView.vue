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

const title = 'Tôn Pomina'
const videoUrls = ['dQw4w9WgXcQ', '3JZ_D3ELwOQ', 'eY52Zsg-KVI', 'DLzxrzFCyOs', '9bZkp7q19f0']
const mainTextContent =
  'Tại Tôn Pomina, tôi tham gia sản xuất nhiều thể loại video Marketing khác nhau, từ video sản phẩm đến phóng sự khách hàng và video ADS. Tôi truyền tải những thông điệp truyền thống theo cách riêng hiện đại, nhưng vẫn giữ được giá trị cốt lõi của thương hiệu.Thử thách lớn nhất là làm sao để một sản phẩm kỹ thuật trở nên gần gũi với người xem. Thông qua cách kể chuyện bằng hình ảnh sáng tạo, cấu trúc nội dung rõ ràng và nhịp dựng phù hợp, tôi dần học được cách cân bằng giữa tính sáng tạo của nội dung và mục tiêu truyền thông của doanh nghiệp.Trong quá trình công tác tại Tôn Pomina, tôi có cơ hội đi thực tế tại nhiều vùng miền khác nhau. Những trải nghiệm này giúp tôi hiểu rõ hơn nhu cầu, hành vi và cách tiếp nhận thông tin của khách hàng, đồng thời tôi nhận ra rằng việc thấu hiểu văn hóa đại chúng, văn hóa địa phương là yếu tố quan trọng để xây dựng nội dung truyền thông phù hợp và  hiệu quả.'

const textHolder = ''
</script>

<style scoped>
/* Additional styling can be added here if needed */
</style>
