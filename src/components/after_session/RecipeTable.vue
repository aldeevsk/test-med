<template>
    <div class="recipe-table">
        <table class="table">
            <thead>
                <th>Лекарственный препарат</th>
                <th>Путь приема</th>
                <th>Дозировка</th>
                <th>Начало приёма</th>
                <th>Конец приёма</th>
                <th>Номер сеанса</th>
                <th>Дней</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(recipe, index) in props.recipes" :key="index">
                    <td>{{ recipe.medication }}</td>
                    <td>{{ recipe.takingMethod }}</td>
                    <td>{{ recipe.dosage }}</td>
                    <td>{{ recipe.startDate }}</td>
                    <td>{{ recipe.endDate }}</td>
                    <td>{{ recipe.number }}</td>
                    <td>{{ recipe.days }}</td>
                    <td @click="emit('deleteItem', index)">
                        <IconDelete />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { IconDelete } from '@/components/icons'

export interface IRecipeTableProps {
    medication: string
    takingMethod: string
    dosage: string
    startDate: string
    endDate: string
    number: number
    days: number
}

const props = defineProps<{
    recipes: IRecipeTableProps[]
}>()

const emit = defineEmits<{
    deleteItem: [index: number]
}>()
</script>

<style scoped>
.recipe-table {
    width: 100%;
}
.table {
    margin-top: 20px;
    border: none;
    border-collapse: collapse;
    width: 100%;
    min-width: 840px;
}
.table th,
.table td {
    height: 3rem;
    padding: 0 20px;
    font-size: 13px;
    border: none;
    font-family: Verdana, sans-serif;
    border: var(--border);
    vertical-align: center;
}
.table td {
    text-align: center;
}
@media (max-width: 840px) {
    .recipe-table {
        width: calc(100vw - 50px);
        margin: 0 auto;
        overflow-x: scroll;
        padding-bottom: var(--gap);
    }
}
</style>
