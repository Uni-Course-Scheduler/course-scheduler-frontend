<script lang="ts" setup>
import type { Module } from "@/models/classes/Module";
import ColoredWrapper from "../widgets/ColoredWrapper.vue";
import type { PropType } from "vue";
import { getColorForStatus } from "@/composables/colorHelper";
import { computed } from "vue";
import type { ComputedRef } from "vue";
import { ModuleStatusEnum } from "@/models/enums/ModuleStatusEnum";
import ElectivesSelection from "./ElectivesSelection.vue";

const props = defineProps({
  module: {
    type: Object as PropType<Module>,
    required: true,
  },
});

const moduleHasElectives: ComputedRef<boolean> = computed(() => {
  return (
    props.module.getElectives().length > 0 &&
    props.module.getStatus() !== ModuleStatusEnum.ALL
  );
});
</script>
<template>
  <ColoredWrapper :labelColor="getColorForStatus(props.module.getStatus())">
    <div class="module">
      <div class="content">
        {{ props.module.getTitle() }}
        <slot></slot>
      </div>
      <ElectivesSelection
        v-if="moduleHasElectives"
        :electives="module.getElectives()"
      />
    </div>
  </ColoredWrapper>
</template>

<style scoped>
.module {
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 86px;
  font-size: var(--font-size-l);
  font-weight: var(--text-semi-bold);
  position: relative;
  margin-bottom: 1rem;
  cursor: pointer;
}
.content {
  display: flex;
  align-items: center;
}
</style>
