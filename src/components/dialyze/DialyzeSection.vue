<template>
    <VSection title="Назначения сеанса гемодиализа">
        <VGroup>
            <VButton :class="{ active: program === 'HD' }" @click="program = 'HD'">HD</VButton>
            <VButton :class="{ active: program === 'HDF' }" @click="program = 'HDF'">HDF</VButton>
            <VButton :class="{ active: program === 'UF' }" @click="program = 'UF'">UF</VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Диализаторы" readonly>Диализатор</TextInput>
            <VButton @click="setupModal('dialyzer')"><IconMenu /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Концентраторы" readonly>Концентратор</TextInput>
            <VButton @click="setupModal('concentrator')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="10 л" readonly> Объем л. </TextInput>
        </VGroup>
        <VGroup title="Тип инъекции">
            <VButton :class="{ active: injectType === 'Игла' }" @click="injectType = 'Игла'"
                >Игла</VButton
            >
            <VButton :class="{ active: injectType === 'Катетер' }" @click="injectType = 'Катетер'"
                >Катетер</VButton
            >
        </VGroup>
        <VGroup :class="{ disabled: injectType != 'Игла' }">
            <TextInput placeholder="Спр. Иглы" readonly />
            <VButton @click="setupModal('needle')" :disabled="injectType != 'Игла'"
                ><IconMenu
            /></VButton>
            <TextInput placeholder="Спр. Тип иглы" readonly />
            <VButton @click="setupModal('needleType')" :disabled="injectType != 'Игла'"
                ><IconMenu
            /></VButton>
        </VGroup>
        <VGroup :class="{ disabled: injectType != 'Катетер' }">
            <TextInput placeholder="Спр. Катетеры" :value="''" readonly />
            <VButton @click="setupModal('catheter')" :disabled="injectType != 'Катетер'"
                ><IconMenu
            /></VButton>
            <TextInput placeholder="Спр. Тип катетера" readonly />
            <VButton @click="setupModal('catheterType')" :disabled="injectType != 'Катетер'"
                ><IconMenu
            /></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="ХХХ гр / л">Бикарбонат</TextInput>
            <VButton @click="setupModal('bicarbonate')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="ХХХ кг">Сухой вес пациента</TextInput>
            <TextInput placeholder="Наименование">Антикоагуляция</TextInput>
            <VButton @click="setupModal('anticoagulant')"><IconMenu /></VButton>
            <TextInput input-class="fit-content" placeholder="ХХХ ед">Объем</TextInput>
        </VGroup>
        <VGroup>
            <VButton>Сформировать сеанс</VButton>
        </VGroup>
        <VGroup>
            <DialyzeBoard
                program=""
                dialyzer=""
                concentrator=""
                inject-type=""
                bicarbonate=""
                anticoagulant=""
                weight=""
            />
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
import { VButton, TextInput } from '@/components/ui'
import { IconMenu } from '@/components/icons'
import { VSection, VGroup } from '@/components'
import { Modal, type IModalProps } from '@/components/modal'
import DialyzeBoard from './DialyzeBoard.vue'
import { useCategoriesStore } from '@/stores/categories'
import { useProductsStore } from '@/stores/products'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()

const program = ref<string>('')
const injectType = ref<string>('')

const modal = ref<IModalProps>({
    isVisible: false,
    model: null,
    items: []
})

function setupModal(categorySlug: string): void {
    const category = categoriesStore.findOne({ slug: categorySlug })
    const products = productsStore.filterBy({ categorySlug })
    console.log(products)
    if (!category || !products) return
    modal.value = {
        model: category,
        items: products,
        isVisible: true
    }
}
</script>

<style scoped></style>
