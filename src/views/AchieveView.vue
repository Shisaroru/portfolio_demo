<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { animate } from 'animejs'
import { useNavigationStore } from '../stores/navigationStore'
import achieve1 from '@/assets/images/achieve_1.png'
import achieve2 from '@/assets/images/achieve_2.png'
import achieve3 from '@/assets/images/achieve_3.png'

interface PagingContent {
  imageUrl: string
  description: string[]
  bullet?: boolean
}

const router = useRouter()
const navigationStore = useNavigationStore()
const page = ref<number>(0)
const imageContainer = ref<HTMLElement | null>(null)

const pagingContents: PagingContent[] = [
  {
    imageUrl: achieve1,
    description: [
      'Tham gia xây dựng thông điệp và định hướng hình ảnh thương hiệu nhằm bảo đảm sự nhất quán trên các nền tảng truyền thông.',
      'Tham gia xây dựng kế hoạch chuyển đổi và phát triển thương hiệu. Xây dựng kế hoạch truyền thông và định hướng nội dung cho các kênh social media. Lên ý tưởng, phát triển và sản xuất nội dung đa nền tảng (Facebook, YouTube, TikTok) bao gồm video, hình ảnh, bài viết phục vụ truyền thông thương hiệu và sản phẩm.',
      'Tham gia xây dựng concept hình ảnh và định hướng visual cho các chiến dịch truyền thông của doanh nghiệp.',
      'Phụ trách xây dựng và quản lý kho dữ liệu hình ảnh, video phục vụ hoạt động marketing.',
      'Dẫn dắt và hướng dẫn thực tập sinh trong các hoạt động sản xuất nội dung truyền thông.',
      'Tham gia tổ chức và truyền thông các sự kiện khách hàng, hoạt động nội bộ của doanh nghiệp.',
      'Thực hiện nghiên cứu thị trường, công tác trải nghiệm thực tế nhằm nắm bắt xu hướng người dùng và nhu cầu thị trường.',
    ],
  },
  {
    imageUrl: achieve2,
    description: [
      'Sáng tạo nội dung, lên ý tưởng video các chiến dịch truyền thông thương hiệu, sản phẩm.(Truyền thông thương hiệu, Giới thiệu sản phẩm, Chuyên đề sản phẩm, Video Ads, Video Sự Kiện,...)',
      'Chịu trách nhiệm phát triển nội dung video trên các kênh social: Youtube, Facebook, Tiktok...',
      'Xây dựng kịch bản, concept hình ảnh video.',
      'Tham gia trực tiếp vào quá trình sản xuất video: Nội dung, thiết kế, quay, dựng, duyệt và truyền thông sản phẩm.',
      'Tham gia hỗ trợ các hoạt động Tổ chức sự kiện tại công ty.',
      'Thực hiện công tác trải nghiệm thực tế và nắm bắt xu hướng người tiêu dùng.',
    ],
    bullet: true,
  },
  {
    imageUrl: achieve3,
    description: [
      'Đề xuất đề tài, lên ý tưởng cách khai thác nội dung và trực tiếp sản xuất các video ở dạng: Tin tức thời sự, phóng sự đời sống, sự kiện xã hội, youtube...',
      'Phối hợp cùng team Thiết kế, Dựng phim để hoàn thiện tin bài.',
      'Chương trình đã tham gia: Chuyện Trưa 12G (HTV); Tiêu Điểm 247 (HTV); Người Đưa Tin 24G (THVL); Tiêu Điểm Nóng (THTPCT); Lăng Nhìn Cuộc Sống (Yeah1 TV); Youtube SaigonTV Official...',
    ],
    bullet: true,
  },
]

const handleImageClick = () => {
  if (page.value === pagingContents.length - 1 && imageContainer.value) {
    animate(imageContainer.value, {
      translateX: -1000,
      opacity: 100,
      duration: 800,
      easing: 'easeInOutQuad',
      onComplete: () => {
        navigationStore.setFromAchieve(true)
        router.push('/skill')
      },
    })
  }
}
</script>

<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center bg-cream py-16 px-4 mt-24"
  >
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Left side: Content -->
        <div>
          <div class="font-cormorant text-base leading-relaxed text-maroon font-semibold">
            <template v-for="content in pagingContents[page]?.description" :key="content">
              <li v-if="pagingContents[page]?.bullet">{{ content }}</li>
              <p class="my-1" v-else>{{ content }}</p>
            </template>
          </div>

          <div class="grid grid-cols-2 font-inter font-semibold text-maroon my-10">
            <div v-if="page === 0"></div>
            <UButton v-else class="justify-self-start" @click="page--">BACK</UButton>

            <div v-if="page === pagingContents.length - 1"></div>
            <UButton v-else class="justify-self-end" @click="page++">NEXT</UButton>
          </div>
        </div>

        <!-- Right side: Image -->
        <div class="flex items-center justify-center">
          <div
            ref="imageContainer"
            class="w-full aspect-square rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden cursor-pointer transition-transform hover:scale-105"
            @click="handleImageClick"
          >
            <!-- Placeholder for image -->
            <img
              class="w-100 object-cover"
              :src="pagingContents[page]?.imageUrl"
              alt="About image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
