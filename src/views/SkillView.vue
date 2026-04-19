<script setup lang="ts">
import { ref } from 'vue'
import { useNavigationStore } from '../stores/navigationStore'

const navigationStore = useNavigationStore()

interface SkillDescription {
  description: string
  children?: SkillDescription[]
}

interface Skill {
  title: string
  descriptions: SkillDescription[]
}
const skills = ref<Skill[]>([
  {
    title: 'Thương hiệu & Truyền thông',
    descriptions: [
      { description: 'Xây dựng nội dung và thông điệp truyền thông thương hiệu' },
      { description: 'Lập kế hoạch nội dung cho các nền tảng social media' },
      { description: 'Nghiên cứu thị trường và nắm bắt xu hướng người dùng' },
    ],
  },
  {
    title: 'Sản xuất nội dung Truyền thông đa phương tiện',
    descriptions: [
      { description: 'Xây dựng kịch bản' },
      { description: 'Quay phim, chụp ảnh và dựng video.' },
    ],
  },
  {
    title: 'Công cụ',
    descriptions: [
      { description: 'Canva, CapCut' },
      {
        description: 'Adobe Illustrator, Photoshop, Premiere',
      },
      { description: 'Ứng dụng AI nhằm tối ưu hiệu quả công việc' },
    ],
  },
  {
    title: 'Kỹ năng Làm việc & Giao tiếp',
    descriptions: [
      { description: 'Làm việc nhóm và phối hợp liên phòng ban' },
      { description: 'Khả năng giao tiếp và truyền đạt ý tưởng nội dung hiệu quả' },
      {
        description: 'Tư duy giải quyết vấn đề trong quá trình sản xuất và triển khai truyền thông',
      },
      { description: 'Quản lý công việc và đảm bảo tiến độ dự án' },
    ],
  },
])

// Reset the flag when component mounts
navigationStore.resetFromAchieve()
</script>

<template>
  <section id="skill" class="min-h-screen bg-cream py-32 px-4 my-4">
    <div class="max-w-7xl mx-auto w-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div aria-hidden="true" class="hidden md:block"></div>

        <div class="w-full">
          <template v-for="(skill, index) in skills" :key="index">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-6 py-8">
              <div class="bg-cream p-6 text-center">
                <p v-text-reveal class="font-cormorant text-xl text-maroon font-semibold">
                  {{ skill.title }}
                </p>
              </div>
              <div class="font-cormorant">
                <li
                  v-text-reveal="{ delayStep: 500 }"
                  v-for="(description, descIndex) in skill.descriptions"
                  :key="descIndex"
                >
                  {{ description.description }}
                  <template v-if="description.children">
                    <li
                      v-for="(child, childIndex) in description.children"
                      :key="childIndex"
                      class="ml-4"
                    >
                      {{ child.description }}
                    </li>
                  </template>
                </li>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
