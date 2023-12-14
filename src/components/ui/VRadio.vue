<template>
    <input type="radio"
        :name="props.name"
        :id="props.id"
        :required="props.required"
        @change="emit('change', +props.id)"
    >
    <label
        :for="props.id"
    >
        {{ props.label }}
    </label>
</template>

<script setup lang="ts">

const props = defineProps<{
    name: string,
    id: string,
    label: string
    required?: boolean
}>()

const emit = defineEmits<{
    change: [id: number]
}>()
</script>

<style scoped>
[type='radio'] {
    display: none;
}
[type='radio'] + label {
    display: flex;
    align-items: center;
    height: 30px;
    padding: 0 2rem;
    border: 2px solid rgba(var(--dark), 0.8);
    border-radius: var(--radius-sm);
}
[type='radio']:checked + label {
    border-color: rgba(var(--accent), 0.8);
    color: rgba(var(--accent), 0.8)
}
</style>