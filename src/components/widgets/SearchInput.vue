<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="input-wrapper">
    <input type="text" :placeholder="placeholder" />
    <slot name="icon" />
  </div>
</template>

<style scoped>
.input-wrapper {
  position: relative;
  margin-bottom: 1.563rem;
}
</style>