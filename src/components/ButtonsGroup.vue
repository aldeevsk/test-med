<template>
    <div class="buttons-group">
        <VButton
            v-for="(button, index) in props.buttons"
            :key="index"
            @click="emit('click', index)"
        >
            {{ button.text }}
        </VButton>
    </div>
</template>

<script setup lang="ts">
import { VButton } from "./ui"

export interface ButtonProps {
    text: string
}

const props = defineProps<{
    title?: string
    buttons: ButtonProps[]
}>()

const emit = defineEmits<{
    click: [buttonId: number]
}>()
</script>

<style scoped>
.buttons-group {
    display: flex;
    gap: var(--gap);
    padding: calc(var(--gap) / 2);
}
</style>