<script setup lang="ts"></script>

<template>
  <section id="works" class="min-h-screen bg-cream-light py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-kollektif text-5xl font-bold text-maroon mb-12 text-center">Works</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Work card template -->
        <div
          class="bg-cream rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div
            class="h-48 bg-linear-to-br from-maroon/20 to-maroon/40 flex items-center justify-center"
          >
            <p class="font-sofia-pro text-maroon">Project Image</p>
          </div>
          <div class="p-6">
            <h3 class="font-kollektif text-xl font-bold text-maroon mb-2">Project Title</h3>
            <p class="font-sofia-pro text-sm text-maroon/80">Add your project description here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
