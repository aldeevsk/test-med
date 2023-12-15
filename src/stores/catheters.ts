import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { IEntity } from '@/stores/types/models'

export const useCathetersStore = defineStore('catheters', () => {
    const catheters = ref()

    function all(): IEntity[] {
        return catheters.value
    }

    function fetchData(): void {
        catheters.value = api.getBy<IEntity[]>({ category: 'catheters' })
    }

    fetchData()

    return { all, fetchData }
})
