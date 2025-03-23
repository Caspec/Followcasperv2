import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTagStore = defineStore('TagStore', () => {
  const selectedTags = ref<string[]>([])

  const toggleTag = (tag: string) => {
    if (selectedTags.value.includes(tag)) {
      selectedTags.value = selectedTags.value.filter((t) => t !== tag)
    } else {
      selectedTags.value.push(tag)
    }
  }

  const clearTags = () => {
    selectedTags.value = []
  }

  const setTags = (tags: string[]) => {
    selectedTags.value = tags
  }

  return { selectedTags, toggleTag, clearTags, setTags }
})
