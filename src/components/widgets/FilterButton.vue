<script setup lang="ts">
import type { PropType } from "vue";
import type { ColoredWrapperEnum as ColoredWrapperType } from "@/models/enums/ColoredWrapperEnum";
import { ColoredWrapperEnum } from "@/models/enums/ColoredWrapperEnum";
import ColoredWrapper from "@/components/widgets/ColoredWrapper.vue";

const props = defineProps({
  group: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  color: {
    type: Object as PropType<ColoredWrapperType>,
    default: ColoredWrapperEnum.GREY,
  },
});
</script>

<template>
  <ColoredWrapper 
  :labelColor="props.color"
  :fillBackground="true"
  >
    <div class="filter">
      <input type="radio" :name="group" :id="id" />
      <span>{{ text }}</span>
    </div>
  </ColoredWrapper>
</template>
<style scoped>
.filter {
  height: var(--input-height-xl);
  display: flex;
  align-items: center;
  column-gap: var(--column-gap-m);
}
</style>
