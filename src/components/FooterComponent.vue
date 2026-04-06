<script setup lang="ts">
const contactEmail = 'trucphuong86@gmail.com'
</script>

<template>
  <footer class="bg-cream border-t-2 border-cream-light py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <!-- Left: Empty space for alignment -->
        <div></div>

        <!-- Center: Contact info -->
        <div class="text-center"></div>

        <!-- Right: Email -->
        <div class="text-right">
          <a
            :href="`mailto:${contactEmail}`"
            class="font-sofia-pro text-maroon hover:text-maroon/70 transition-colors"
          >
            {{ contactEmail }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
