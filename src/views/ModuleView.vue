<script setup lang="ts">
import ModulesViewHeader from "@/components/modules-view/ModulesViewHeader.vue";
import draggable from 'vuedraggable'
import {useI18n} from "vue-i18n";
import type {Ref} from "vue";
import {onMounted, ref} from "vue";
import {useModulesStore} from "@/stores/ModulesStore";
import type {Module as ModuleType} from "@/models/classes/Module";
import FetchModulesService from "@/services/FetchModulesService";
import type {IModule} from "@/models/interfaces/IModule";

const {t} = useI18n()
const modulesStore = useModulesStore()
const dragging: Ref<boolean> = ref(true)

const allModules: Ref<IModule[]> = ref([])

onMounted(() => {
})


const list1 = ref([
  {name: "John"},
  {name: "Joao"},
  {name: "Jean"},
  {name: "Gerard"}
])
const list2 = ref([
  {name: "Juan"},
  {name: "Edgard"},
  {name: "Johnson"}
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
              <div>{{ element.name }}</div>
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
              <div>{{ element.name }}</div>
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
