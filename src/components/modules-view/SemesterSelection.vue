<script lang="ts" setup>
import GenericSelectDropdown from "@/components/widgets/GenericSelectDropdown.vue";
import FetchModulesService from "@/services/FetchModulesService";
import { useModulesStore } from "@/stores/ModulesStore";

interface ISemester {
  title: string,
  value: number
}
const semester = [
  { title: "1. Semester", value: 1 },
  { title: "2. Semester", value: 2 },
  { title: "3. Semester", value: 3 },
  { title: "4. Semester", value: 4 },
  { title: "5. Semester", value: 5 },
  { title: "6. Semester", value: 6 },
];
const modulesStore = useModulesStore();

const getModulesBySemester = (semester: ISemester) => {
  modulesStore.fetchModules(semester.value);
};

</script>
<template>
  <div class="semester-selection">
    <GenericSelectDropdown
      :defaultItem="semester[0]"
      :results="semester"
      :disabled="true"
      @select:item="getModulesBySemester"
    >
      <template #item="{ item }">
        {{ item.title }}
      </template>
    </GenericSelectDropdown>
  </div>
</template>

<style scoped>
.semester-selection {
  position: relative;
  margin-bottom: 1.385rem;
}
</style>
