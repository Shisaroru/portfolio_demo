import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const fromAchieve = ref(false)

  const setFromAchieve = (value: boolean) => {
    fromAchieve.value = value
  }

  const resetFromAchieve = () => {
    fromAchieve.value = false
  }

  return { fromAchieve, setFromAchieve, resetFromAchieve }
})
