<script setup lang="ts">
defineProps({
  fill: {
    type: String,
    default: 'var(--text-dark-secondary)'
  }
})
</script>

<template>
  <svg fill="none" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="fill"
        d="M29 14.375C29 12.5824 27.5426 11.125 25.75 11.125H6.25C4.45742 11.125 3 12.5824 3 14.375V25.75C3 27.5426 4.45742 29 6.25 29H25.75C27.5426 29 29 27.5426 29 25.75V14.375ZM25.3438 7.0625H6.65625C5.98086 7.0625 5.4375 7.60586 5.4375 8.28125C5.4375 8.95664 5.98086 9.5 6.65625 9.5H25.3438C26.0191 9.5 26.5625 8.95664 26.5625 8.28125C26.5625 7.60586 26.0191 7.0625 25.3438 7.0625ZM22.9062 3H9.09375C8.41836 3 7.875 3.54336 7.875 4.21875C7.875 4.89414 8.41836 5.4375 9.09375 5.4375H22.9062C23.5816 5.4375 24.125 4.89414 24.125 4.21875C24.125 3.54336 23.5816 3 22.9062 3Z"
    />
  </svg>
</template>

<style>
/* default size, not scoped in order to receive styles from above */
svg {
  width: 1.25rem;
  height: 1.25rem;
}
</style>