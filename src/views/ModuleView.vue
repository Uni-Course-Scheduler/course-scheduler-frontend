<script setup lang="ts">
import ModulesViewHeader from "@/components/modules-view/ModulesViewHeader.vue";
import draggable from "vuedraggable";
import { useI18n } from "vue-i18n";
import type { Ref } from "vue";
import { onMounted, ref } from "vue";
import { useModulesStore } from "@/stores/ModulesStore";

const { t } = useI18n();
const modulesStore = useModulesStore();
const dragging: Ref<boolean> = ref(true);

/**
 * Prevents duplicates in selected modules
 * @param event
 */
const checkMove = (event: any) => {
  const isAlreadySelected = modulesStore.selectedModules.includes(
    event.draggedContext.element
  );
  if (isAlreadySelected) {
    return false;
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
            <div>{{ element.title }}</div>
          </template>
        </draggable>
      </div>
      <div class="flex-column">
        <h2>{{ t("modulesView.headings.selectedModules") }}</h2>
        <draggable
          :group="{ name: 'modules' }"
          class="wrapper dashed grow"
          style="border-color: #9aaaec"
          v-model="modulesStore.selectedModules"
          @start="dragging = true"
          @end="dragging = false"
          item-key="id"
        >
          <template #item="{ element }">
            <div>{{ element.title }}</div>
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
