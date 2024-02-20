<script setup lang="ts">
import type {PropType} from "vue";
import type {ColoredWrapperEnum as ColoredWrapperType} from "@/models/enums/ColoredWrapperEnum";
import {ColoredWrapperEnum} from "@/models/enums/ColoredWrapperEnum";

defineProps({
  labelColor: {
    type: Object as PropType<ColoredWrapperType>,
    default: ColoredWrapperEnum.GREY
  },
  fillBackground: {
    type: Boolean,
    default: false
  },
})
</script>

<template>
<div class="colored-wrapper" :class="[labelColor, fillBackground ? 'fill' : '' ]">
    <slot></slot>
</div>
</template>

<style scoped>
.colored-wrapper {
}
</style>