<template>
    <div class="search">
        <TextInput type="text"
            class="search__input"
            :placeholder="props.placeholder"
        />
        <VButton class="search__button"
            @click="search"
        >
            <IconLoupe/>
        </VButton>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VButton, TextInput } from '.'
import { IconLoupe } from '../icons'

const props = defineProps<{
    placeholder: string
}>()

const input = ref<string>('')

const emit = defineEmits<{
    search: [query: string]
}>()

function search(): void {
    emit('search', input.value)
}
</script>

<style scoped>
.search {
    width: 100%;
    height: 30px;
    display: flex;
    gap: 5px;
}
.search__input {
    flex-grow: 1;
}
</style>