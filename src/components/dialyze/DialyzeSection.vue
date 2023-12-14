<template>
    <VSection title="Назначения сеанса гемодиализа">
        <VGroup>
            <VButton :class="{'active': program === 'HD'}" @click="program='HD'">HD</VButton>
            <VButton :class="{'active': program === 'HDF'}" @click="program='HDF'">HDF</VButton>
            <VButton :class="{'active': program === 'UF'}" @click="program='UF'">UF</VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Диализаторы" :value="dialyzeAppointments.dialyzers.label" readonly>Диализатор</TextInput>
            <VButton @click="setupModal('dialyzers')"><IconMenu/></VButton>
        </VGroup>
        <VGroup>
            <TextInput placeholder="Спр. Концентраторы" readonly>Концентратор</TextInput>
            <VButton @click="setupModal('concentrators')"><IconMenu/></VButton>
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
            @close="modal.isVisible=false"
            @change="(slug, selected) => setDict(slug, selected, dialyzeAppointments)"
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
import type { IModalData, IEntities } from '@/types/models'
import { useDialyzersStore } from '@/stores/dialyzers'

const dialyzersStore = useDialyzersStore()

const program = ref<string>('')
const injectType = ref<string>('')


const categories = ref<IModalData>({
    dialyzers: {
        info: {id: 1, slug: 'dialyzers', label: 'Диализаторы'},
        items: dialyzersStore.all()
    },
    concentrators: {
        info: { id: 2, slug: 'concentrators', label: 'Концентраторы'},
        items: []
    }
})

const modal = ref<IModalProps>({
    isVisible: false,
    model: null,
    items: []
})

function setupModal(model: string): void {
    const mod = categories.value[model]
    if(!mod) return
    modal.value = {
        model: mod.info,
        items: mod.items,
        isVisible: true
    }
}

const dialyzeAppointments = ref<IEntities>({
    dialyzers: {id: 1, slug: '', label: ''},
    concentrators: {id: 1, slug: '', label: ''},
})

function setDict(key: string, selected: string, dict: IEntities): void {
    const entry = dict[key]
    const data = categories.value[key].items.find( item => item.slug === selected)
    if (!entry || !data) return;
    dict[key] = data
    console.log(entry)
}
</script>

<style scoped>
</style>