<template>
    <div class="date-input">
        <span class="input__title" v-if="props.title">
            {{ props.title }}
        </span>
        <input :type="props.time ? 'datetime-local' : 'date'" :value="props.value" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    time?: string
    value?: string
}>()
</script>

<style scoped>
.date-input {
    display: grid;
    gap: calc(var(--gap) / 2);
}
[type='date'],
[type='datetime-local'] {
    height: 3rem;
    padding: 0 var(--gap);
    font-size: var(--font-sm);
    border: var(--border);
}
</style>
