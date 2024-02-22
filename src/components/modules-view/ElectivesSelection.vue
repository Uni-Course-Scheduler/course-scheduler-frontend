<script lang="ts" setup>
import GenericSelectDropdown from "@/components/widgets/GenericSelectDropdown.vue";
import type { Module } from "@/models/classes/Module";
import type { PropType } from "vue";
import DefaultModule from "./DefaultModule.vue";
import { useModulesStore } from "@/stores/ModulesStore";
import { ModuleStatusEnum } from "@/models/enums/ModuleStatusEnum";
defineProps({
  electives: {
    type: Array as PropType<Module[]>,
    required: true,
  },
});

const modulesStore = useModulesStore();

const handleElectiveSelection = (elective: Module) => {
  elective.setStatus(ModuleStatusEnum.PLANNED)
  const index = modulesStore.selectedModules.findIndex(
    (module) => module.getId() === elective.getMainModuleId()
  );

  if(index !== -1) {
    modulesStore.selectedModules[index].setFormats(elective.getFormats());
  }
};
</script>
<template>
  <GenericSelectDropdown :disabled="true" @select:item="handleElectiveSelection" :results="electives" placeholder="Wähle ein Modul aus.">
    <template #item="{ item }">
      <DefaultModule :module="item"></DefaultModule>
    </template>
  </GenericSelectDropdown>
</template>
<style></style>
