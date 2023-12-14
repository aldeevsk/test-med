<template>
    <div class="group">
        <h3 class="group__title" v-if="props.title">
            {{ props.title }}
        </h3>
        <div class="group__body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
}>()
</script>

<style scoped>
.group {
    display: grid;
    gap: var(--gap);
}
.group__title {
    font-weight: normal;
    font-size: var(--font-md);
}
.group__body {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: var(--gap);
    padding: var(--padding) 0;
}
</style>