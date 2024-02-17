<script setup lang="ts">
import ModulesViewHeader from "@/components/modules-view/ModulesViewHeader.vue";
import draggable from 'vuedraggable'
import {useI18n} from "vue-i18n";
import type {Ref} from "vue";
import {ref} from "vue";

const { t } = useI18n()

const dragging: Ref<boolean> = ref(true)

const list1 = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 }
])
const list2 = ref([
  {name: "Juan", id: 5},
  {name: "Edgard", id: 6},
  {name: "Johnson", id: 7}
])

</script>

<template>
  <main>
    <div class="container">
      <ModulesViewHeader/>
      <div class="flex-container">
        <div class="flex-column">
          <h2>{{ t('modulesView.headings.allModules') }}</h2>
          <draggable
              class="wrapper dashed" style="border-color: #C0C0C2"
              v-model="list1"
              group="modules"
              @start="dragging=true"
              @end="dragging=false"
              item-key="id">
            <template #item="{element}">
              <div>{{element.name}}</div>
            </template>
          </draggable>
        </div>
        <div class="flex-column">
          <h2>{{ t('modulesView.headings.selectedModules') }}</h2>
          <draggable
              class="wrapper dashed" style="border-color: #9AAAEC"
              v-model="list2"
              group="modules"
              @start="dragging=true"
              @end="dragging=false"
              item-key="id">
            <template #item="{element}">
              <div>{{element.name}}</div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.flex-container {
  display: flex;
  column-gap: var(--column-gap-l);
}

.flex-column {
  height: 100%;
  flex: 1;
}
</style>
