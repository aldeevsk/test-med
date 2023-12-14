<template>
    <div class="modal__item">
        <div class="modal__item-name">
            <span>Венозные</span>
            <IconDelete @click="emit('deleteItem')"/>
        </div>
        <VButton>
            <IconAngleRight/>
        </VButton>
    </div>
</template>

<script setup lang="ts">
import { IconDelete, IconAngleRight } from '../icons'
import { VButton } from '../ui'


const emit = defineEmits<{
    deleteItem: []
}>()
</script>

<style scoped>
.modal__item {
    width: 100%;
    height: 3rem;
    display: flex;
    gap: 1px;
}
.modal__item-name {
    height: 100%;
    padding: 0 10px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid rgba(var(--dark), 0.8);
}
</style>