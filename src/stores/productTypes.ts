import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api.utils'
import { type IProductTypes } from '@/stores/types/medical'

export const usePoductTypesStore = defineStore('productTypes', () => {
    const productTypes = ref<IProductTypes[]>([])

    function all(): IProductTypes[] {
        return productTypes.value
    }

    function fetchData(): void {
        const result = api.getBy<IProductTypes[]>({ table: 'productTypes' })
        if (!result) return
        productTypes.value = result
    }

    fetchData()

    return { all, fetchData }
})
