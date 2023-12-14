<template>
    <section class="section">
        <div class="container">
            <h2 class="section__title">{{ props.title }}</h2>
            <div class="section__body">
                <slot></slot>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
}>()
</script>

<style scoped>
.container {
    width: min(1440px, calc(100vw - 50px));
    margin: 0 auto;
}
.section__title {
    font-size: var(--font-md);
}
</style>