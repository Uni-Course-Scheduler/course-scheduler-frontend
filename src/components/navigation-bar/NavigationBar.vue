<script setup lang="ts">
import NavigationBarHeader from "@/components/navigation-bar/NavigationBarHeader.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import ModuleIcon from "@/components/icons/ModuleIcon.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";
import PlansIcon from "@/components/icons/PlansIcon.vue";
import GraduationCapIcon from "@/components/icons/GraduationCapIcon.vue";
import NavigationBarFooter from "@/components/navigation-bar/NavigationBarFooter.vue";

const iconFill: string = 'var(--text-light-primary)'
</script>

<template>
  <aside id="navigation-bar">
    <NavigationBarHeader />

    <div class="link-wrapper">
      <RouterLink :to="{ name: 'scheduler' }">
        <CalendarIcon :fill="iconFill" />
        <span>Module Planen</span>
      </RouterLink>

      <RouterLink :to="{ name: 'modules' }">
        <ModuleIcon :fill="iconFill" />
        <span>Modulübersicht</span>
      </RouterLink>

      <RouterLink :to="{ name: 'conflicts' }">
        <WarningIcon :fill="iconFill" />
        <span>Konflikte</span>
      </RouterLink>

      <RouterLink :to="{ name: 'archive' }">
        <PlansIcon :fill="iconFill" />
        <span>gespeicherte Pläne</span>
      </RouterLink>

      <RouterLink :to="{ name: 'settings' }">
        <GraduationCapIcon :fill="iconFill" />
        <span>Uni Einstellungen</span>
      </RouterLink>
    </div>

    <NavigationBarFooter />
  </aside>
</template>

<style scoped>
#navigation-bar {
  width: 20%;
  min-width: 360px;
  height: 100vh;
  background-color: var(--main-blue);
  padding: 1.563rem;
  display: flex;
  flex-direction: column;
}

.link-wrapper {
  flex: 1;
}

a {
  display: flex;
  align-items: center;
  column-gap: var(--column-gap-l);
  padding: var(--column-gap-l);
  font-size: var(--font-size-xl);
  font-weight: var(--text-medium);
  border-radius: var(--border-raduis-l);
  margin-bottom: 1.25rem;
}

a:hover {
  background-color: var(--dark-blue);
}

a.router-link-active {
  background-color: var(--dark-blue);
}

a span {
  margin-top: 0.313rem;
}

svg {
  width: 1.625rem;
  height: 1.625rem;
}
</style>