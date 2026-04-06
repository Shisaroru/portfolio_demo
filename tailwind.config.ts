
import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/@nuxt/ui/dist/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F7F6E5',
        'cream-light': '#E4DFB5',
        maroon: '#452829'
      },
      fontFamily: {
        cormorant: ['Cormorant', 'serif'],
        kollektif: ['Kollektif', 'sans-serif'],
        'sofia-pro': ['Sofia Pro', 'sans-serif'],
      }
    }
  }
} satisfies Config
