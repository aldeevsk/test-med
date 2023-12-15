import { ref } from 'vue'
import { defineStore } from 'pinia'
import { api } from '@/utils/api'
import type { IEntities, IEntity } from '@/stores/types/models'

export const useAppointmentsStore = defineStore('appointments', () => {
    const appointments = ref<IEntities>()

    function all(): IEntities | void {
        return appointments.value
    }

    function fetchData(): void {
        const data = api.getBy<IEntities>({ category: 'appointments' })
        if (!data) return
        appointments.value = data
    }

    fetchData()

    return { all, fetchData }
})
