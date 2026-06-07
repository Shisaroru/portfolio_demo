/// <reference types="vite/client" />

declare module '#imports' {
  export function useColorMode(): {
    forced: boolean
    preference?: 'dark' | 'light' | 'system'
    readonly value?: 'dark' | 'light'
  }
}
