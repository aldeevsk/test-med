<template>
    <VSection title="Назначения сеанса гемодиализа">
        <VGroup>
            <VButton :class="{'active': program === 'HD'}" @click="program='HD'">HD</VButton>
            <VButton :class="{'active': program === 'HDF'}" @click="program='HDF'">HDF</VButton>
            <VButton :class="{'active': program === 'UF'}" @click="program='UF'">UF</VButton>
        </VGroup>
        <VGroup>
            <TextInput :placeholder="dialazer" readonly>Диализатор</TextInput>
            <VButton @click="setupModal('dialyzers')"><IconMenu/></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Концентраторы" readonly>Концентратор</TextInput>
            <VButton @click="setupModal('Концентратор')"><IconMenu/></VButton>
            <TextInput input-class="fit-content" placeholder="10 л" readonly>Объем л.</TextInput>
        </VGroup>
        <VGroup title="Тип инъекции">
            <VButton :class="{'active': injectType === 'Игла'}" @click="injectType='Игла'">Игла</VButton>
            <VButton :class="{'active': injectType === 'Катетер'}" @click="injectType='Катетер'">Катетер</VButton>
        </VGroup>
        <VGroup :class="{'disabled': injectType != 'Игла'}">
            <TextInput placeholder="Спр. Иглы" readonly/>
            <VButton @click="setupModal('Иглы')"  :disabled="injectType != 'Игла'"><IconMenu/></VButton>
            <TextInput placeholder="Спр. Тип иглы" readonly/>
            <VButton @click="setupModal('Тип иглы')"  :disabled="injectType != 'Игла'"><IconMenu/></VButton>
        </VGroup>
        <VGroup :class="{'disabled': injectType != 'Катетер'}">
            <TextInput placeholder="Спр. Катетеры" readonly/>
            <VButton @click="setupModal('Катетеры')" :disabled="injectType != 'Катетер'"><IconMenu/></VButton>
            <TextInput placeholder="Спр. Тип катетера" readonly/>
            <VButton @click="setupModal('Тип катетера')" :disabled="injectType != 'Катетер'"><IconMenu/></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="ХХХ гр / л">Бикарбонат</TextInput>
            <VButton @click="setupModal('Бикарбонат')"><IconMenu/></VButton>
            <TextInput input-class="fit-content" placeholder="ХХХ кг">Сухой вес пациента</TextInput>
            <TextInput placeholder="Наименование">Антикоагуляция</TextInput>
            <VButton @click="setupModal('Антикоагуляция')"><IconMenu/></VButton>
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
            v-if="modal.isVisible"
            :title="modal.title"
            @close="modal.isVisible=false"
            @change="(model, value) => console.log(model, value)"
            :model="modal.model"
        />
    </VSection>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VButton, TextInput } from '@/components/ui'
import { IconMenu } from '../icons'
import { VSection, VGroup } from '@/components'
import { Modal } from '@/components/modal'
import DialyzeBoard from './DialyzeBoard.vue'

const program = ref<string>('')
const injectType = ref<string>('')


const dialazer = ref<string>('Диализатор 1')

const modal = ref({
    title: 'Диализаторы',
    isVisible: false,
})
function setupModal(model: string) {
    modal.value.isVisible = true
}
</script>

<style scoped>
.fit-content {
    width: 8rem;
}
</style>