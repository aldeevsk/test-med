<template>
  <label>
    <slot></slot>
    <input
      class="input"
      type="text"
      :placeholder="props.placeholder"
      :required="props.required"
      :readonly="props.readonly"
      :disabled="props.disabled"
    />
  </label>
</template>

<script setup lang="ts">
const props = defineProps<{
  placeholder?: string
  required?: boolean
  readonly?: boolean
  disabled?: boolean
}>()
</script>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) / 2);
}
.input {
  height: 3rem;
  flex-shrink: 0;
  border: 2px solid rgba(var(--dark), 0.8);
  padding: 0 10px;
  outline: none;
}
.input:focus {
  border-color: rgba(var(--accent), 0.8);
}
.input:focus::placeholder {
  color: rgb(var(--accent));
}
.input.error {
  border-color: rgb(var(--danger));
  color: rgb(var(--danger));
}
.input:read-only, .input:read-only::placeholder {
  border-color: rgba(var(--dark), 0.8);
  color: rgba(var(--dark), 0.8);
}
</style>
