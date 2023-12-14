<template>
    <div class="date">
        <span class="group__title" v-if="props.title">
            {{ props.title }}
        </span>
        <input type="date" name="" id=""
            @change="emitChange"
        >
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()

const emit = defineEmits<{
    change: [value: string]
}>()

function emitChange(event: Event) {
    const target = event.target as HTMLInputElement
    emit('change', target.value)
}
</script>

<style scoped>
.date {
    display: grid;
    gap: 5px;
}
[type='date'] {
    height: 3rem;
    padding: 0 10px;
    border: 2px solid rgba(var(--dark), 0.8);
    font-size: var(--font-sm);
}
</style>