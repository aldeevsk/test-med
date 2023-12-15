<template>
    <footer class="footer">
        <div class="container">
            <VGroup class="content-between">
                <DateInput time="true" :value="date" />
                <span>ФИО лечащего врача</span>
                <span>Должность</span>
            </VGroup>
            <VGroup>
                <VButton>Сохранить изменения</VButton>
            </VGroup>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { VGroup } from '.'
import { DateInput, VButton } from './ui'
import { formatDateForInputDatetime } from '@/utils/date'

const date = ref<string>('')

function setDate() {
    const now = new Date()
    const dateString = formatDateForInputDatetime(now)
    date.value = dateString
}

onMounted(() => {
    setDate()
})
</script>

<style scoped>
.footer {
    padding-bottom: var(--gap-lg);
}
</style>
