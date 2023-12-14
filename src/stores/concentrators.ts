import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { IEntity } from '@/types/models'

export const useConcentratorsStore = defineStore('concentrators', () => {
  const concentrators = ref()

  function all(): IEntity[] {
    return concentrators.value
  }

  function fetchData(): void {
    concentrators.value = api.getBy({ category: 'concentrators' })
    console.log(concentrators.value)
  }

  fetchData()

  return { all, fetchData }
})
