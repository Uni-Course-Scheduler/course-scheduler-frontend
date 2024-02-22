<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const model = defineModel();
</script>

<template>
  <div class="input-wrapper">
    <input v-model="model" :disabled="disabled" type="text" :placeholder="placeholder" />
    <slot name="icon" />
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
}
</style>