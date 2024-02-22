<script lang="ts" setup generic="T">
import CaretDown from "@/components/icons/CaretDown.vue";
import SearchInput from "@/components/widgets/SearchInput.vue";
import { computed } from "vue";
import { ref } from "vue";
import type { Ref } from "vue";

const props = defineProps<{
  results: T[];
  placeholder?: string;
  defaultItem?: T;
  disabled?: boolean,
}>();

const emit = defineEmits(["select:item", "close"]);

const handleSelection = (item: T) => {
  if (hasTitle(item)) {
    title.value = (item as { title: string }).title;
  }

  showDropdown.value = false;
  emit("select:item", item);
};

const hasTitle = (item: T) => {
  if (item && typeof item === "object" && "title" in item) {
    if (typeof (item as { title: unknown }).title === "string") {
      return true;
    }
    return false;
  }
};

const itemTitle = computed(() => {
  return props.defaultItem && hasTitle(props.defaultItem)
    ? props.defaultItem.title
    : "";
});

const title: Ref<string> = ref(itemTitle.value);
const showDropdown: Ref<boolean> = ref(false);
</script>
<template>
  <SearchInput
    :placeholder="placeholder"
    :disabled="disabled"
    @click="showDropdown = !showDropdown"
    v-model="title"
  >
    <template #icon>
      <CaretDown />
    </template>
  </SearchInput>

  <ul class="result-list" v-if="showDropdown">
    <li
      v-for="(result, index) in results"
      :key="index"
      @click="handleSelection(result)"
    >
      <slot name="item" :item="result"></slot>
    </li>
  </ul>
</template>
<style scoped>
.result-list {
  position: absolute;
  z-index: 99;
  top: 100%;
}
svg {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  cursor: pointer;
}

ul {
  padding: var(--padding-m);
  border-radius: var(--border-raduis-l);
  background-color: var(--bc-color-primary);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>
