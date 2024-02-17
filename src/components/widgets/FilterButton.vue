<script setup lang="ts">
import type {PropType} from "vue";
import type {ColoredWrapperEnum as ColoredWrapperType} from "@/models/enums/ColoredWrapperEnum";
import {ColoredWrapperEnum} from "@/models/enums/ColoredWrapperEnum";

defineProps({
  group: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  color: {
    type: Object as PropType<ColoredWrapperType>,
    default: ColoredWrapperEnum.GREY
  }
})
</script>

<template>
<label class="colored-wrapper" :class="color">
  <input type="radio" :name="group" :id="id" />
  <span>{{ text }}</span>
</label>
</template>

<style scoped>
.colored-wrapper {
  display: flex;
  align-items: center;
  column-gap: var(--column-gap-m);
}
</style>