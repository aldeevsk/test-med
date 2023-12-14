import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { IEntity } from '@/types/models'

export const useDialyzersStore = defineStore('dialyzers', () => {
  const dialyzers = ref()

  function all(): IEntity[] {
    return dialyzers.value
  }

  function fetchData(): void {
    dialyzers.value = api.getBy({ category: 'dialyzers' })
    console.log(dialyzers.value)
  }

  fetchData()

  return { all, fetchData }
})
