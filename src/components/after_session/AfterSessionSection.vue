<template>
    <VSection title="Назначения после сеанса">
        <VGroup>
            <TextInput placeholder="Спр. Препараты" readonly>Лекарственный препарат</TextInput>
            <VButton @click="setupModal('medication')"><IconMenu /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Путь приёма" readonly>Путь приёма</TextInput>
            <VButton @click="setupModal('Путь приёма')"><IconMenu /></VButton>
            <TextInput placeholder="Спр. Дозы препаратов" readonly>Дозировка</TextInput>
            <VButton @click="setupModal('')"><IconMenu /></VButton>
        </VGroup>
        <VGroup title="Номера сеансов:">
            <VButton
                v-for="day in sessionDays"
                :key="day.num"
                :class="{ active: day.status === 'active' }"
                @click="setDay(day.num)"
            >
                {{ day.num }}
            </VButton>
        </VGroup>
        <VGroup>
            <DateInput title="Начало сеанса" />
            <DateInput title="Конец сеанса" />
            <span>Количество сеансов: {{ sessionsCount }}</span>
        </VGroup>
        <VGroup>
            <VButton>Сформировать</VButton>
        </VGroup>
        <VGroup>
            <RecipeTable :recipes="recipes" />
        </VGroup>
        <Modal
            @close="modal.isVisible = false"
            :model="modal.model"
            :items="modal.items"
            :isVisible="modal.isVisible"
        />
    </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu } from '../icons'
import { VButton, TextInput, DateInput } from '@/components/ui'
import { VSection, VGroup } from '@/components'
import { Modal, type IModalProps } from '@/components/modal'
import RecipeTable, { type IRecipeTableProps } from './RecipeTable.vue'
import { useCategoriesStore } from '@/stores'
import { useProductsStore } from '@/stores'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

interface ISessionDay {
    num: number
    status: string
}

const sessionDays = ref<ISessionDay[]>([
    { num: 1, status: '' },
    { num: 2, status: '' },
    { num: 3, status: '' },
    { num: 4, status: '' },
    { num: 5, status: '' },
    { num: 6, status: '' },
    { num: 7, status: '' }
])

const sessionsCount = ref<number>(0)

function setDay(num: number): void {
    const filtered = sessionDays.value.filter((d) => d.status === 'active')
    const index = sessionDays.value.findIndex((d) => d.num === num)
    if (index || index === 0) {
        sessionDays.value[index].status = 'active'
        sessionsCount.value = filtered.length
    }
}

const modal = ref<IModalProps>({
    isVisible: false,
    model: null,
    items: []
})

function setupModal(categorySlug: string): void {
    const category = categoriesStore.findOne({ slug: categorySlug })
    const products = productsStore.filterBy({ categorySlug })
    if (!category || !products) return
    modal.value = {
        model: category,
        items: products,
        isVisible: true
    }
}
const recipes = ref<IRecipeTableProps[]>([
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1
    },
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1
    },
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1
    }
])
</script>

<style scoped>
.fit-content {
    width: 8rem;
}
</style>
