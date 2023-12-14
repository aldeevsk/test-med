<template>
  <VSection title="Назначения после сеанса">
    <VGroup>
      <TextInput placeholder="Спр. Препараты" readonly>Лекарственный препарат</TextInput>
      <VButton @click="setupModal('Препараты')"><IconMenu /></VButton>
    </VGroup>
    <VGroup>
      <TextInput placeholder="Спр. Путь приёма" readonly>Путь приёма</TextInput>
      <VButton @click="setupModal('Путь приёма')"><IconMenu /></VButton>
      <TextInput placeholder="Спр. Дозы препаратов" readonly>Дозировка</TextInput>
      <VButton @click="setupModal('Дозы препаратов')"><IconMenu /></VButton>
    </VGroup>
    <VGroup title="Номера сеансов:">
      <VButton
      v-for="day in sessionDays"
      :key="day.num"
      :class="{'active': day.status === 'active'}"
      @click="setDay(day.num)"
    >
        {{ day.num }}
      </VButton>
    </VGroup>
    <VGroup>
      <DateInput title="Начало сеанса" />
      <DateInput title="Конец сеанса" />
      <span>Количество сеансов: 3</span>
    </VGroup>
    <VGroup>
      <VButton>Сформировать</VButton>
    </VGroup>
    <VGroup>
        <RecipeTable :recipes="recipes"/>
    </VGroup>
    <Modal v-if="modal.isVisible" :title="modal.title" @close="modal.isVisible = false" />
  </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu } from '../icons'
import { VButton, TextInput, DateInput } from '@/components/ui'
import { VSection, VGroup } from '@/components'
import { Modal } from '@/components/modal'
import RecipeTable, { type IRecipeTableProps } from './RecipeTable.vue'

interface ISessionDay {
  num: number
  status: string
  recipe: {
    medication?: string
    takingMethod?: string
    dosage?: string
  }
}

const sessionDays = ref<ISessionDay[]>([
  { num: 1, status: '', recipe: {} },
  { num: 2, status: '', recipe: {} },
  { num: 3, status: '', recipe: {} },
  { num: 4, status: '', recipe: {} },
  { num: 5, status: '', recipe: {} },
  { num: 6, status: '', recipe: {} },
  { num: 7, status: '', recipe: {} }
])

const recipes = ref<IRecipeTableProps[]>([
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1,
    },
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1,
    },
    {
        medication: '',
        takingMethod: '',
        dosage: '',
        startDate: '',
        endDate: '',
        number: 1,
        days: 1,
    },
])

function setDay(num: number): void {
    const index = sessionDays.value.findIndex( d => d.num === num)
    if(index || index === 0) sessionDays.value[index].status = 'active'
}

const modal = ref({
  isVisible: false,
  title: 'Диализаторы'
})
function setupModal(category: string): void {
  modal.value.isVisible = true
  modal.value.title = category
  console.log(category)
}
</script>

<style scoped>
.fit-content {
  width: 8rem;
}
</style>
