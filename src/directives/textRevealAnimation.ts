import type { Directive, DirectiveBinding } from 'vue'
import { animate, stagger, splitText } from 'animejs'

type SplitLinesLoopBinding = {
  duration?: number
  delayStep?: number
  exitDelay?: number
  loopDelay?: number
  wholeElement?: boolean
}

const cleanupMap = new WeakMap<HTMLElement, () => void>()

const getOptions = (binding: DirectiveBinding<SplitLinesLoopBinding>) => {
  return {
    duration: binding.value?.duration ?? 750,
    delayStep: binding.value?.delayStep ?? 0,
    exitDelay: binding.value?.exitDelay ?? 750,
    loopDelay: binding.value?.loopDelay ?? 500,
    wholeElement: binding.value?.wholeElement ?? false,
  }
}

const destroy = (el: HTMLElement) => {
  cleanupMap.get(el)?.()
  cleanupMap.delete(el)
}

const setup = (el: HTMLElement, binding: DirectiveBinding<SplitLinesLoopBinding>) => {
  destroy(el)

  const { duration, delayStep, wholeElement } = getOptions(binding)

  if (wholeElement) {
    animate(el, {
      y: [{ to: ['100%', '0%'] }],
      duration,
      ease: 'out(3)',
      delay: delayStep,
      // loop: true,
      // loopDelay,
    })

    cleanupMap.set(el, () => { })
    return
  }

  const splitter = splitText(el, {
    lines: { wrap: 'clip' },
  })

  splitter.addEffect(({ lines }) =>
    animate(lines, {
      y: [{ to: ['100%', '0%'] }],
      duration,
      ease: 'out(3)',
      delay: stagger(delayStep),
      // loop: true,
      // loopDelay,
    }),
  )

  cleanupMap.set(el, () => {
    splitter.revert()
  })
}

export const splitLinesLoopDirective: Directive<HTMLElement, SplitLinesLoopBinding> = {
  mounted(el, binding) {
    setup(el, binding)
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      setup(el, binding)
    }
  },
  unmounted(el) {
    destroy(el)
  },
}
