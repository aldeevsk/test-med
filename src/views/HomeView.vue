<template>
  <PageHeader/>
  <main>
    <DialyzeSection/>
    <AfterSessionSection/>
    <HomeTreatmentSection/>
  </main>
  <VFooter/>
</template>

<script setup lang="ts">
import { PageHeader, VFooter } from '@/components'
import DialyzeSection from '@/components/dialyze/DialyzeSection.vue'
import { AfterSessionSection } from '@/components/after_session/'
import { HomeTreatmentSection } from '@/components/home_treatment'
</script>

<style scoped>
</style>
