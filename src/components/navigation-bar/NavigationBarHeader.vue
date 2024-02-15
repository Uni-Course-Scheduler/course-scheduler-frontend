<script setup lang="ts">
import UserIcon from "@/components/icons/UserIcon.vue";
</script>

<template>
  <header>
    <UserIcon fill="var(--bc-color-primary)" />
    <div class="user-info">
      <span class="user-name">Marc Klose</span>
      <span class="semester">Im 4. Semester</span>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  column-gap: var(--column-gap-m);
  padding: 1.563rem 0.625rem;
  border-bottom: 1px solid var(--main-border);
  margin-bottom: 1.563rem;
}

header svg {
  width: 2.188rem;
  height: 2.188rem;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: var(--font-size-l);
  font-weight: var(--text-medium);
  color: var(--text-light-primary);
}

.semester {
  font-size: var(--font-size-s);
  font-weight: var(--text-regular);
  color: var(--text-light-secondary);
}
</style>