import Lenis from 'lenis'

let lenis: Lenis | null = null
let rafId: number | null = null

const onAnimationFrame = (time: number) => {
  lenis?.raf(time)
  rafId = window.requestAnimationFrame(onAnimationFrame)
}

export const initLenis = () => {
  if (typeof window === 'undefined') {
    return null
  }

  if (lenis) {
    return lenis
  }

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    syncTouch: false,
  })

  rafId = window.requestAnimationFrame(onAnimationFrame)

  return lenis
}

export const destroyLenis = () => {
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId)
    rafId = null
  }

  lenis?.destroy()
  lenis = null
}

export const scrollToTop = (immediate = false) => {
  const lenisInstance = initLenis()

  if (!lenisInstance) {
    return Promise.resolve()
  }

  return new Promise<void>((resolve) => {
    lenisInstance.scrollTo(0, {
      force: true,
      immediate,
      onComplete: () => resolve(),
    })
  })
}
