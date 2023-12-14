<template>
    <div class="add">
        <TextInput
            class="add__input"
            v-model="input"
            placeholder="Добавить новую запись"
        />
        <VButton class="add__button"
            @click="add"
        >
            <IconPlus/>
        </VButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TextInput, VButton } from '.'
import { IconPlus } from '../icons'


const emit = defineEmits<{
    add: [title: string]
}>()

const input = ref<string>('')

function add(): void {
    emit('add', input.value)
}
</script>

<style scoped>
.add {
    height: 30px;
    display: flex;
    gap: 5px;
}
.add__input {
    flex-grow: 1;
}
</style>