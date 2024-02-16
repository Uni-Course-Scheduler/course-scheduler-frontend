<script setup lang="ts">
import type {PropType} from "vue";
import type {RouteRecordRaw} from "vue-router";

defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="{ name: route.name }">
    <component v-if="route.meta" :is="route.meta.icon" fill="var(--text-light-primary)"/>
    <span>{{ route.meta.navBarTitle }}</span>
  </RouterLink>
</template>

<style scoped>
a {
  display: flex;
  align-items: center;
  column-gap: var(--column-gap-l);
  padding: var(--column-gap-l);
  font-size: var(--font-size-xl);
  font-weight: var(--text-medium);
  border-radius: var(--border-raduis-l);
  margin-bottom: 1.25rem;
}

a:hover {
  background-color: var(--dark-blue);
}

a.router-link-active {
  background-color: var(--dark-blue);
}

a span {
  margin-top: 0.313rem;
}

svg {
  width: 1.85rem;
  height: 1.85rem;
}
</style>