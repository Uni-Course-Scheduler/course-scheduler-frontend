<script setup lang="ts">
import FilterButton from "@/components/widgets/FilterButton.vue"
import {ColoredWrapperEnum} from "@/models/enums/ColoredWrapperEnum";
import {useI18n} from "vue-i18n";

const { t } = useI18n()
</script>

<template>
<div class="filter-wrapper">
  <FilterButton id="all"       group="modules" :color="ColoredWrapperEnum.GREY"   :text="t('modulesView.filterBtn.all')"       />
  <FilterButton id="planned"   group="modules" :color="ColoredWrapperEnum.BLUE"   :text="t('modulesView.filterBtn.planned')"   />
  <FilterButton id="requested" group="modules" :color="ColoredWrapperEnum.YELLOW" :text="t('modulesView.filterBtn.requested')" />
  <FilterButton id="accepted"  group="modules" :color="ColoredWrapperEnum.GREEN"  :text="t('modulesView.filterBtn.accepted')"  />
</div>
</template>

<style scoped>
.filter-wrapper {
  display: flex;
  column-gap: var(--column-gap-m);
}
</style>