<template>
    <div class="modal">
        <div class="modal__content">
            <div class="modal__header">
                <span class="modal__title">{{ props.title }}</span>
                <VButton class="modal__close-button" @click="emit('close')">Закрыть</VButton>
                <VSearch placeholder="Поиск позиции по первым символам"/>
                <VAddRecord/>
            </div>
            <div class="modal__body">
                <div class="modal__item">
                    <ModalItem/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ModalItem from './ModalItem.vue'
import { VSearch, VButton, VAddRecord } from '../ui'

const props = defineProps<{
    title: string
}>()

const emit = defineEmits<{
    close: []
}>()
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(var(--dark), 0.4);
}
.modal__content {
    width: min(500px, calc(100vw - 50px));
    background: rgb(var(--light));
    padding: 10px;
}
.modal__header {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
}
.modal__title {
    font-weight: bold;
}
.modal__close-button {
    align-self: flex-start;
}
.modal__body {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
}
</style>