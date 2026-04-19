<template>
  <div
    class="bg-cover bg-center bg-no-repeat flex items-center justify-center w-full h-screen"
    :style="{ backgroundImage: `url(${projectBg})` }"
  >
    <div
      class="bg-[#D9D9D9] opacity-70 p-8 rounded-lg w-full h-full flex flex-col items-center justify-center"
    >
      <h1 v-text-reveal class="text-4xl font-bold mb-6 text-black text-center font-cormorant">
        {{ title }}
      </h1>

      <div ref="textContentRef" class="space-y-4 text-black text-center max-w-4xl font-cormorant">
        <p v-if="dissapearTextContent" class="overflow-hidden opacity-0">
          {{ dissapearTextContent }}
        </p>

        <p class="text-center opacity-0">{{ mainTextContent }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { animate } from 'animejs'

const props = defineProps<{
  projectBg: string
  title: string
  textContent?: string
  mainTextContent: string
}>()

const dissapearTextContent = ref(props.textContent)
const textContentRef = useTemplateRef<HTMLDivElement>('textContentRef')

onMounted(() => {
  const paragraphs = textContentRef.value?.querySelectorAll('p')

  if (!paragraphs?.length) return

  animate(paragraphs, {
    opacity: [{ from: 0, to: 1 }],
    duration: 900,
    delay: 800,
    ease: 'out(2)',
  })
})
</script>
