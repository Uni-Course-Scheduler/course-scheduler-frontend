<script setup lang="ts">
import type {ComputedRef, PropType} from "vue";
import type {RouteRecordRaw} from "vue-router";
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const { t } = useI18n()

const props = defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  }
})

// Returns the navigation bar button title in the current selected language
const multilingualTitle: ComputedRef<string> = computed(() => {
  if (props.route && props.route.name) {
    return t(`navigationBar.buttons.${props.route.name}`)
  }
  return ''
})
</script>

<template>
  <RouterLink :to="{ name: route.name }">
    <component v-if="route.meta" :is="route.meta.icon" fill="var(--text-light-primary)"/>
    <span>{{ multilingualTitle }}</span>
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