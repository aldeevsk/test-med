<template>
    <button class="button" :disabled="props.disabled">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
}>()
</script>

<style scoped>
.button {
  height: 3rem;
  padding: 0 2rem;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  stroke: rgb(var(--dark));
  fill: none;
  outline: none;
  border: var(--border);
  border-radius: var(--radius-sm);
}
.button:hover {
  border-color: rgba(var(--accent), 0.8);
  stroke: rgb(var(--accent));
  color: rgb(var(--accent));
}
.button:active {
  border-color: rgb(var(--accent));
  stroke: rgb(var(--accent));
  color: rgb(var(--light));
  background: rgba(var(--primary), 0.6);
}
.button.active {
  border-color: transparent;
  stroke: rgb(var(--accent));
  color: rgb(var(--light));
  background: rgba(var(--primary), 0.8);
}
</style>