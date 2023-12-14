<template>
    <div class="board">
        <div class="board__item"><IconMonitor/>Программа {{ props.program }}</div>
        <div class="board__item"><IconDialyzer/>Диализатор {{ props.dialyzer }}</div>
        <div class="board__item"><IconConcentrator/>Концентратор Объём {{ props.concentrator }}</div>
        <div class="board__item"><IconInject/>Игла/Катетер {{ props.injectType }}</div>
        <div class="board__item"><IconLab/>Бикарбонат мл {{ props.bicarbonate }}</div>
        <div class="board__item"><IconLab/>Антикоагуляция ед. {{ props.anticoagulant }}</div>
        <div class="board__item"><IconWeight/>Сухой вес кг {{ props.weight }}</div>
    </div>
</template>

<script setup lang="ts">
import { IconMonitor, IconDialyzer, IconInject, IconLab, IconWeight, IconConcentrator } from '../icons'

const props = defineProps<{
    program: string,
    dialyzer: string,
    concentrator: string,
    injectType: string,
    bicarbonate: string,
    anticoagulant: string
    weight: string
}>()
</script>

<style scoped>
.board {
    width: 100%;
    display: flex;
    gap: var(--gap);
    flex-wrap: wrap;
    align-items: center;
    padding: var(--gap);
    border: 2px solid rgba(var(--dark), 0.8);
}
.board__item {
    min-width: 30%;
    display: flex;
    gap: var(--gap);
    align-items: center;
}
</style>