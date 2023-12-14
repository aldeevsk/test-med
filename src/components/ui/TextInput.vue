<template>
  <label :class="inputClass">
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
  inputClass?: string
}>()
</script>

<style scoped>
label {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: calc(var(--gap) / 2);
}
label.fit-content {
  flex-grow: 0;
}
.input {
  width: 100%;
  height: 3rem;
  flex-shrink: 0;
  border: var(--border);
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
