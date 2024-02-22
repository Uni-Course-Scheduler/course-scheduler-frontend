<script setup lang="ts">
import SearchInput from "@/components/widgets/SearchInput.vue";
import FilterBar from "@/components/modules-view/FilterBar.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <header>
    <SearchInput :placeholder="t('modulesView.searchInputPlaceholder')">
      <template #icon>
        <SearchIcon />
      </template>
    </SearchInput>
    <FilterBar />
  </header>
</template>

<style scoped>
header {
  margin-bottom: 3.75rem;
}

svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
}
</style>
