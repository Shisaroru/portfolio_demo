<script setup lang="ts">
import { animate } from 'animejs'
import { scrollToElement } from '@/lib/lenis'
import { computed, nextTick, ref, watch } from 'vue'
import achieve1 from '@/assets/images/achieve_1.png'
import achieve2 from '@/assets/images/achieve_2.png'
import achieve3 from '@/assets/images/achieve_3.png'
import achievePlaceholder from '@/assets/images/achieve_top.jpg'

interface AchievementSection {
  label: string
  entries: string[]
  image: string
  imagePosition: string
  value: string
}

const sections: AchievementSection[] = [
  {
    label: 'LONG VÂN GROUP',
    value: 'long-van-group',
    image: achieve1,
    imagePosition: 'object-[38%_center]',
    entries: [
      'Tham gia xây dựng thông điệp và định hướng hình ảnh thương hiệu nhằm bảo đảm sự nhất quán trên các nền tảng truyền thông.',
      'Tham gia xây dựng kế hoạch chuyển đổi và phát triển thương hiệu.',
      'Xây dựng kế hoạch truyền thông và định hướng nội dung cho các kênh social media.',
      'Lên ý tưởng, phát triển và sản xuất nội dung đa nền tảng (Facebook, YouTube, TikTok) bao gồm video, hình ảnh, bài viết phục vụ truyền thông thương hiệu và sản phẩm.',
      'Tham gia xây dựng concept hình ảnh và định hướng visual cho các chiến dịch truyền thông của doanh nghiệp.',
      'Phụ trách xây dựng và quản lý kho dữ liệu hình ảnh, video phục vụ hoạt động marketing.',
      'Dẫn dắt và hướng dẫn thực tập sinh trong các hoạt động sản xuất nội dung truyền thông.',
      'Tham gia tổ chức và truyền thông các sự kiện khách hàng, hoạt động nội bộ của doanh nghiệp.',
      'Thực hiện nghiên cứu thị trường, công tác trải nghiệm thực tế nhằm nắm bắt xu hướng người dùng và nhu cầu thị trường.',
    ],
  },
  {
    label: 'CÔNG TY CỔ PHẦN TÔN POMINA',
    value: 'ton-pomina',
    image: achieve2,
    imagePosition: 'object-center',
    entries: [
      'Sáng tạo nội dung, lên ý tưởng video các chiến dịch truyền thông thương hiệu, sản phẩm.(Truyền thông thương hiệu, Giới thiệu sản phẩm, Chuyên đề sản phẩm, Video Ads, Video Sự Kiện,...)',
      'Chịu trách nhiệm phát triển nội dung video trên các kênh social: Youtube, Facebook, Tiktok...',
      'Xây dựng kịch bản, concept hình ảnh video.',
      'Tham gia trực tiếp vào quá trình sản xuất video: Nội dung, thiết kế, quay, dựng, duyệt và truyền thông sản phẩm.',
      'Tham gia hỗ trợ các hoạt động Tổ chức sự kiện tại công ty.',
      'Thực hiện công tác trải nghiệm thực tế và nắm bắt xu hướng người tiêu dùng.',
    ],
  },
  {
    label: 'CÔNG TY CỔ PHẦN TRUYỀN THÔNG SAIGONTV',
    value: 'saigontv',
    image: achieve3,
    imagePosition: 'object-[38%_center]',
    entries: [
      'Đề xuất đề tài, lên ý tưởng cách khai thác nội dung và trực tiếp sản xuất các video ở dạng: Tin tức thời sự, phóng sự đời sống, sự kiện xã hội, youtube...',
      'Phối hợp cùng team Thiết kế, Dựng phim để hoàn thiện tin bài.',
      'Chương trình đã tham gia: Chuyện Trưa 12G (HTV); Tiêu Điểm 247 (HTV); Người Đưa Tin 24G (THVL); Tiêu Điểm Nóng (THTPCT); Lăng Nhìn Cuộc Sống (Yeah1 TV); Youtube SaigonTV Official...',
    ],
  },
]

const openAccordion = ref<string | undefined>(undefined)
const accordionContainer = ref<HTMLElement | null>(null)

const activeImage = computed(() => {
  return (
    sections.find((section) => section.value === openAccordion.value)?.image ?? achievePlaceholder
  )
})

const activeImagePosition = computed(() => {
  return (
    sections.find((section) => section.value === openAccordion.value)?.imagePosition ??
    'object-[78%_center]'
  )
})

watch(openAccordion, async (value) => {
  if (!value) return

  await nextTick()

  const trigger = accordionContainer.value?.querySelector<HTMLElement>(
    'button[aria-expanded="true"], [data-state="open"] button, [data-state="open"] [data-slot="trigger"]',
  )

  if (!trigger) return

  void scrollToElement(trigger, {
    offset: -24,
  })
})

const handleImageEnter = (element: Element, done: () => void) => {
  const htmlElement = element as HTMLElement
  htmlElement.style.transformOrigin = 'center center'
  htmlElement.style.backfaceVisibility = 'hidden'
  htmlElement.style.transform = 'perspective(1400px) rotateY(-90deg) scale(0.92)'

  animate(htmlElement, {
    rotateY: ['-90deg', '0deg'],
    scale: [0.92, 1],
    opacity: [0.65, 1],
    duration: 950,
    ease: 'outExpo',
    onComplete: done,
  })
}

const handleImageLeave = (element: Element, done: () => void) => {
  const htmlElement = element as HTMLElement
  htmlElement.style.transformOrigin = 'center center'
  htmlElement.style.backfaceVisibility = 'hidden'

  animate(htmlElement, {
    rotateY: ['0deg', '78deg'],
    scale: [1, 0.96],
    opacity: [1, 0],
    duration: 300,
    ease: 'inQuad',
    onComplete: done,
  })
}
</script>

<template>
  <section
    id="about"
    class="min-h-screen flex items-center justify-center bg-cream py-16 px-4 mt-24"
  >
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div ref="accordionContainer" class="flex min-h-112 flex-col">
          <UAccordion
            v-model="openAccordion"
            :items="sections"
            type="single"
            collapsible
            :ui="{
              root: 'space-y-6',
              item: 'overflow-hidden bg-transparent',
              header: 'w-full',
              trigger:
                'flex min-h-28 w-full items-center px-8 py-10 text-left font-cormorant text-xl font-semibold text-maroon transition-colors duration-200',
              label: 'flex flex-1 items-center justify-center text-center',
              trailingIcon: 'text-maroon',
              content: 'pt-4 mb-6',
              body: 'px-0 py-0 font-cormorant font-semibold text-lg leading-relaxed text-maroon',
            }"
          >
            <template #body="{ item }">
              <ul class="list-disc space-y-2 pl-6">
                <li v-for="entry in item.entries" :key="entry">
                  {{ entry }}
                </li>
              </ul>
            </template>
          </UAccordion>
        </div>

        <div class="hidden md:flex md:justify-center md:px-4">
          <div
            class="image-stage u-image-zoom-hover-container w-full max-w-[500px] aspect-[5/6] rounded-lg bg-linear-to-br from-maroon to-maroon/80 flex items-center justify-center overflow-hidden"
          >
            <Transition
              mode="out-in"
              :css="false"
              @enter="handleImageEnter"
              @leave="handleImageLeave"
            >
              <img
                :key="activeImage"
                :class="['u-image-zoom-hover h-full w-full object-cover', activeImagePosition]"
                :src="activeImage"
                alt="Achievement placeholder image"
              />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-stage {
  perspective: 1400px;
  transform-style: preserve-3d;
}

:deep(.image-stage img) {
  transform-style: preserve-3d;
  will-change: transform, opacity;
}

:deep([data-slot='content']) {
  overflow: hidden;
}

:deep([data-slot='content'][data-state='open']) {
  animation: accordion-down 0.7s ease forwards;
}

:deep([data-slot='content'][data-state='closed']) {
  animation: accordion-up 0.55s ease forwards;
}

@keyframes accordion-down {
  from {
    opacity: 0;
    height: 0;
    transform: translateY(-12px);
  }

  to {
    opacity: 1;
    height: var(--reka-accordion-content-height);
    transform: translateY(0);
  }
}

@keyframes accordion-up {
  from {
    opacity: 1;
    height: var(--reka-accordion-content-height);
    transform: translateY(0);
  }

  to {
    opacity: 0;
    height: 0;
    transform: translateY(-8px);
  }
}
</style>
