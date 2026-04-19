<template>
  <section class="min-h-screen bg-cream px-6 py-20">
    <div class="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">
      <div class="grid w-full grid-cols-1 gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div class="space-y-6 text-center md:text-left">
          <p class="font-kollektif text-sm uppercase tracking-[0.45em] text-maroon/70">Error 404</p>
          <h1 class="font-cormorant text-6xl font-semibold leading-none text-maroon md:text-8xl">
            Page not found
          </h1>
          <p class="max-w-xl font-cormorant text-2xl italic text-maroon/80 md:text-3xl">
            The page you were trying to reach does not exist, or the link is no longer available.
          </p>
          <RouterLink
            to="/"
            class="inline-flex items-center justify-center rounded-full border-2 border-maroon px-8 py-3 font-kollektif text-sm uppercase tracking-[0.25em] text-maroon transition-colors duration-200 hover:bg-maroon hover:text-cream"
          >
            Return Home
          </RouterLink>
        </div>

        <div class="flex justify-center md:justify-end">
          <div
            class="flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl border-2 border-maroon/20 bg-linear-to-br from-maroon to-maroon/80 p-8 shadow-lg"
          >
            <div
              class="flex h-full w-full items-center justify-center rounded-[1.75rem] border border-cream/20 bg-cream/10"
            >
              <span class="font-kollektif text-7xl font-bold tracking-[0.15em] text-cream md:text-8xl">
                404
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
