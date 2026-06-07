<script setup lang="ts">
interface EducationSection {
  titleLines: string[]
  descriptions: string[]
}

const educationSections: EducationSection[] = [
  {
    titleLines: ['2024 - 2026', 'Thạc sĩ Quan hệ Công chúng'],
    descriptions: ['ĐẠI HỌC KINH TẾ - TÀI CHÍNH TP.HCM'],
  },
  {
    titleLines: ['2019 - 2022', 'Cử nhân Báo Chí - Truyền Thông'],
    descriptions: ['ĐẠI HỌC HUẾ - TRƯỜNG ĐẠI HỌC KHOA HỌC'],
  },
  {
    titleLines: ['2017 - 2019'],
    descriptions: ['TRƯỜNG CAO ĐẲNG PHÁT THANH - TRUYỀN HÌNH II'],
  },
]
</script>

<template>
  <section id="education" class="min-h-screen flex items-center justify-center bg-cream px-4 py-24">
    <div class="mx-auto w-full max-w-5xl">
      <div class="space-y-8">
        <template v-for="(section, index) in educationSections" :key="index">
          <div class="grid grid-cols-1 items-center gap-6 py-8 md:grid-cols-2 md:gap-10">
            <div class="bg-cream p-6 text-center">
              <div class="space-y-1 text-maroon">
                <p
                  v-for="(line, lineIndex) in section.titleLines"
                  :key="lineIndex"
                  v-text-reveal
                  class="font-arimo text-xl"
                  :class="lineIndex === 0 ? 'font-normal' : 'font-medium'"
                >
                  {{ line }}
                </p>
              </div>
            </div>

            <ul
              class="flex h-full flex-col justify-center space-y-3 font-arimo text-lg font-semibold uppercase text-maroon"
            >
              <li
                v-for="(description, descIndex) in section.descriptions"
                :key="descIndex"
                v-text-reveal="{ delayStep: 500 }"
              >
                {{ description }}
              </li>
            </ul>
          </div>
          <hr v-if="index < educationSections.length - 1" class="border-maroon/20" />
        </template>
      </div>
    </div>
  </section>
</template>
