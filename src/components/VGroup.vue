<template>
    <div class="group">
        <h3 class="group__title"
            v-if="props.title">
            {{ props.title }}
        </h3>
        <div class="group__body" :style="{ 'column-gap': props.cGap, 'row-gap': props.rGap }">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    cGap?: string
    rGap?: string
}>()
</script>

<style scoped>
.group {
    display: grid;
    gap: var(--gap);
    width: 100%;
}
.group__title {
    font-weight: normal;
    font-size: var(--font-md);
}
.group__body {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: end;
    gap: var(--gap);
    padding-bottom: var(--padding);
}
.group.content-between .group__body {
    justify-content: space-between;
}
.group.content-around .group__body {
    justify-content: space-around;
}
.content-right {
    justify-content: end;
}
</style>