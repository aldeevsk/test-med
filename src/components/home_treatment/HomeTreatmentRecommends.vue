<template>
    <div class="recommends">
        <h3 class="recommends__title">Рекомендации</h3>
        <div class="recommends__body">
            <VAddRecord/>
            <div class="recommends__list">
                <div class="recommends__item">item</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VAddRecord } from '../ui'
</script>

<style scoped>
.recommends {
    width: 100%;
    display: grid;
    gap: var(--gap);
}
.recommends__body {
    width: 100%;
    display: grid;
    gap: var(--gap);
}
.recommends__list {
    display: flex;
    padding: var(--gap);
    flex-direction: column;
    border: var(--border);
}
</style>