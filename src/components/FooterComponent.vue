<script setup lang="ts">
const contactEmail = 'trucphuong0986@gmail.com'
</script>

<template>
  <footer class="bg-cream px-4 py-6 md:py-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 items-center gap-4 md:grid-cols-3 md:gap-8">
        <!-- Left: Empty space for alignment -->
        <div class="hidden md:block"></div>

        <!-- Center: Contact info -->
        <div class="hidden text-center md:block"></div>

        <!-- Right: Email -->
        <div class="text-center md:text-right">
          <a
            :href="`mailto:${contactEmail}`"
            class="font-arimo text-maroon hover:text-maroon/70 transition-colors"
          >
            {{ contactEmail }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
