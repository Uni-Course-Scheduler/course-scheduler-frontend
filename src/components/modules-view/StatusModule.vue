<script lang="ts" setup>
import type { Module } from "@/models/classes/Module";
import type { PropType } from "vue";
import DefaultModule from "./DefaultModule.vue";
import type { ModuleFormat } from "@/models/classes/ModuleFormat";

defineProps({
  module: {
    type: Object as PropType<Module>,
    required: true,
  },
});

const sectionAndGroup = (format: ModuleFormat) => {
    if(format.getEvent()?.getGroup() !== null) {
      return format.getEvent()?.getSection() + ". Zug " + format.getEvent()?.getGroup() + ". Gruppe "
    }

    return format.getEvent()?.getSection() + ". Zug";
    
}
</script>
<template>
  <DefaultModule :module="module">
    <div class="cards">
      <div
        class="card-details"
        v-for="format in module.getFormats()"
        :key="format.getId()"
      >
        <span class="card">{{ format.getType() }}</span>
        <h4>{{sectionAndGroup(format)}}</h4>
      </div>
    </div>
  </DefaultModule>
</template>
<style scoped>
.cards {
  display: flex;
  gap: 10px;
  .card {
    padding: 10px;
    background-color: #ebeff7;
    border-radius: 8px;
  }
}
</style>
