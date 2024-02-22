<script setup lang="ts">
import ModulesViewHeader from "@/components/modules-view/ModulesViewHeader.vue";
import DefaultModule from "@/components/modules-view/DefaultModule.vue";
import draggable from "vuedraggable";
import { useI18n } from "vue-i18n";
import type { Ref } from "vue";
import { onMounted, ref } from "vue";
import { useModulesStore } from "@/stores/ModulesStore";
import { useTimetableStore } from "@/stores/TimetableStore";
import SemesterSelection from "@/components/modules-view/SemesterSelection.vue";
import StatusModule from "@/components/modules-view/StatusModule.vue";

const timetableStore = useTimetableStore();


const { t } = useI18n();
const modulesStore = useModulesStore();
const dragging: Ref<boolean> = ref(true);

/**
 * Prevents duplicates in selected modules
 * @param event
 */
const checkMove = (event: any) => {
  const index = modulesStore.selectedModules.findIndex(
      (module) => module.getId() ===  event.draggedContext.element.id
    );

    if (index !== -1) {
      return false;
    }
};
/**
 * Creates a copy of the moved module, changes the status of the module 
 * and replaces it with the module added automatically by the draggable library  
 * @param event 
 */
const updateModuleStatus = async (event: any) => {
  const modules = await timetableStore.createTimetable(modulesStore.selectedModules); 
  modulesStore.parseToInstance(modules);

  if (event.added) {
    const index = modulesStore.selectedModules.findIndex(
      (module) => module.getId() === event.added.element.id
    );

    if (index !== -1) {
      const module = event.added.element
      // Copy to create a new instance with updated status
      const selectedModule = module.copy(); 
      modulesStore.selectedModules[index] = selectedModule;
    }
  }
};
onMounted(() => {
  modulesStore.fetchModules(1);
});
</script>

<template>
  <main>
    <ModulesViewHeader />
    <div class="flex-container">
      <div class="flex-column">
        <h2>{{ t("modulesView.headings.allModules") }}</h2>
        <SemesterSelection />
        <draggable
          :sort="false"
          :group="{ name: 'modules', pull: 'clone', put: 'false' }"
          :move="checkMove"
          class="wrapper dashed grow"
          style="border-color: #c0c0c2"
          v-model="modulesStore.allModules"
          @start="dragging = true"
          @end="dragging = false"
          item-key="id"
        >
          <template #item="{ element }">
            <DefaultModule :module="element" />
          </template>
        </draggable>
      </div>
      <div class="flex-column">
        <h2>{{ t("modulesView.headings.selectedModules") }}</h2>
        <draggable
        :sort="false"
          :group="{ name: 'modules' }"
          class="wrapper dashed grow"
          style="border-color: #9aaaec"
          v-model="modulesStore.selectedModules"
          @start="dragging = true"
          @end="dragging = false"
          @change="updateModuleStatus"
          item-key="id"
        >
          <template #item="{ element }">
            <StatusModule :module="element" />
          </template>
        </draggable>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
.flex-container {
  height: 100%;
  display: flex;
  column-gap: var(--column-gap-l);
  overflow: hidden;
}

.flex-column {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.grow {
  flex: 1;
}
</style>
