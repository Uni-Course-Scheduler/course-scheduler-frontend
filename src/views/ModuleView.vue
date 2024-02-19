<script setup lang="ts">
import ModulesViewHeader from "@/components/modules-view/ModulesViewHeader.vue";
import draggable from 'vuedraggable'
import {useI18n} from "vue-i18n";
import type {Ref} from "vue";
import {onMounted, ref} from "vue";
import {useModulesStore} from "@/stores/ModulesStore";

const {t} = useI18n();
const modulesStore = useModulesStore();
const dragging: Ref<boolean> = ref(true);

onMounted(() => {
  modulesStore.fetchModules(1);
})
</script>

<template>
  <main>
      <ModulesViewHeader/>
      <div class="flex-container">
        <div class="flex-column">
          <h2>{{ t('modulesView.headings.allModules') }}</h2>
          <draggable
              class="wrapper dashed grow" style="border-color: #C0C0C2"
              v-model="modulesStore.allModules"
              group="modules"
              @start="dragging=true"
              @end="dragging=false"
              item-key="id">
            <template #item="{element}">
              <div>{{ element.title }}</div>
            </template>
          </draggable>
        </div>
        <div class="flex-column">
          <h2>{{ t('modulesView.headings.selectedModules') }}</h2>
          <draggable
              class="wrapper dashed grow" style="border-color: #9AAAEC"
              v-model="modulesStore.selectedModules"
              group="modules"
              @start="dragging=true"
              @end="dragging=false"
              item-key="id">
            <template #item="{element}">
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
