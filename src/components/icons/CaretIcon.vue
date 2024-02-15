<script setup lang="ts">
import type {PropType} from "vue";
import type {IconDirectionEnum as IconDirectionType} from "@/models/enums/IconDirectionEnum";
import {IconDirectionEnum} from "@/models/enums/IconDirectionEnum";

const props = defineProps({
  fill: {
    type: String,
    default: '#FFFFFF'
  },
  direction: {
    type: Object as PropType<IconDirectionType>,
    default: IconDirectionEnum.UP
  }
})

/**
 * Return the angle the icon should be rotated by based on the direction prop
 *
 * e.g. <CaretIcon :direction="IconDirectionEnum.DOWN" /> caret will face down
 *
 * NOTE: The angle may differ based on the original orientation of the svg
 *
 * @return number
 */
function getRotationAngle(): number {
  switch (props.direction) {
    default:
    case IconDirectionEnum.UP:
      return 90;
    case IconDirectionEnum.DOWN:
      return -90;
    case IconDirectionEnum.LEFT:
      return 0;
    case IconDirectionEnum.RIGHT:
      return 180;
  }
}
</script>

<template>
  <svg :fill="fill" :style="{ transform: `rotate(${getRotationAngle()}deg)` }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
    <path
        d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
  </svg>
</template>

<style>
/* default size, not scoped in order to receive styles from above */
svg {
  width: 20px;
  height: 20px;
}
</style>