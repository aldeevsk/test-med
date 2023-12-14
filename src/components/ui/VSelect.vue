<template>
    <div class="group">
        <span class="group__title">{{ props.title }}</span>
        <div class="group__row">
            <div class="select__label">{{ props.label }}</div>
            <button class="select__button"
                @click="emit('clickButton')"
            >
                <IconMenu/>
            </button>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconMenu } from '../icons'


const props = defineProps<{
    title: string,
    label: string
}>()

const emit = defineEmits<{
    clickButton: []
}>()

</script>

<style scoped>

.select__label {
    height: 30px;
    display: flex;
    align-items: center;
    border: 2px solid rgba(var(--dark), 0.6);
    padding: 0 20px;
}
.select__button {
    background: transparent;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(var(--dark), 0.6);
}
</style>