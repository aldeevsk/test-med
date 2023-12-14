<template>
  <VSection title="Лечение на дому">
    <VGroup>
      <TextInput placeholder="Спр. Препараты" readonly>Лекарственный препарат</TextInput>
      <VButton @click="setupModal('Препараты')"><IconMenu /></VButton>
    </VGroup>
    <VGroup>
      <TextInput placeholder="Спр. Путь приема" readonly>Путь приема</TextInput>
      <VButton @click="setupModal('Путь приема')"><IconMenu /></VButton>
      <TextInput placeholder="Спр. Дозы препаратов" readonly>Дозировка</TextInput>
      <VButton @click="setupModal('Дозы препаратов')"><IconMenu /></VButton>
    </VGroup>
    <VGroup>
      <TextInput placeholder="Спр. Кр-ть приема">Кратность приема</TextInput>
      <VButton @click="setupModal('Кратность приема')"><IconMenu/></VButton>
      <DateInput title="Начало приема"/>
      <DateInput title="Конец приема"/>
    </VGroup>
    <VGroup class="content-right">
      <span>Количество дней: ХХ</span>
    </VGroup>
    <VGroup>
      <VButton class="justify-end">Добавить</VButton>
    </VGroup>
    <VGroup>
      <HomeTreatmentRecipe/>
    </VGroup>
    <VGroup>
      <HomeTreatmentRecommends/>
    </VGroup>
    <Modal v-if="modal.isVisible" :title="modal.title" @close="modal.isVisible = false" />
  </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { IconMenu } from '@/components/icons'
import { VButton, TextInput, DateInput } from '@/components/ui'
import { VSection, VGroup } from '@/components/'
import { Modal } from '@/components/modal'
import HomeTreatmentRecipe from './HomeTreatmentRecipe.vue'
import HomeTreatmentRecommends from './HomeTreatmentRecommends.vue'


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
</style>
