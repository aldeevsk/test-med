import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { IMedication } from '@/types/medications'

export const useMedicationsStore = defineStore('medications', () => {
    const medications = ref()

    function all(): IMedication[] {
        return medications.value
    }

    function fetchData(): void {
        medications.value = api.getBy<IMedication[]>({ category: 'medications' })
    }

    onMounted(() => {
        fetchData()
    })

    return { all }
})
