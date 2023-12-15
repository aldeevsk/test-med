import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api.utils'
import { type ICategory } from '@/stores/types/medical'

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<ICategory[]>([])

    function all(): ICategory[] {
        return categories.value
    }

    function findOne({ slug = '' }): ICategory | void {
        const category = categories.value.find((c) => c.slug === slug)
        return category
    }

    function fetchData(): void {
        const result = api.getBy<ICategory[]>({ table: 'categories' })
        if (!result) return
        categories.value = result
    }

    fetchData()

    return { all, fetchData, findOne }
})
