<script setup lang="ts">
import type {PropType} from "vue";
import type {IconDirectionEnum as IconDirectionType} from "@/models/enums/IconDirectionEnum";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";

const props = defineProps({
  fill: {
    type: String,
    default: 'var(--text-dark-secondary)'
  },
  direction: {
    type: Object as PropType<IconDirectionType>,
    required: true
  }
})

/**
 * Return the angle the icon should be rotated by based on the direction prop
 *
 * e.g. <ArrowIcon :direction="IconDirectionEnum.DOWN" /> arrow will face down
 *
 * NOTE: The angle may differ based on the original orientation of the svg
 *
 * @return number
 */
function getRotationAngle(): number {
  switch (props.direction) {
    default:
    case IconDirectionEnum.UP:
      return -90;
    case IconDirectionEnum.DOWN:
      return 90;
    case IconDirectionEnum.LEFT:
      return 180;
    case IconDirectionEnum.RIGHT:
      return 0;
  }
}
</script>

<template>
  <svg :fill="fill" :style="{ transform: `rotate(${getRotationAngle()}deg)` }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path
        d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
  </svg>
</template>

<style>
/* default size, not scoped in order to receive styles from above */
svg {
  width: 20px;
  height: 20px;
}
</style>