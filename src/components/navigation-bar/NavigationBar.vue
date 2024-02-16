<script setup lang="ts">
import NavigationBarHeader from "@/components/navigation-bar/NavigationBarHeader.vue";
import NavigationBarFooter from "@/components/navigation-bar/NavigationBarFooter.vue";
import NavigationBarButton from "@/components/navigation-bar/NavigationBarButton.vue";
import router from "@/router";
import {computed} from "vue";
import type {ComputedRef} from "vue";
import type {RouteRecord} from "vue-router";

// dynamically render
const navBarButtons: ComputedRef<any[]> = computed(() => {
  const navBarButtons: RouteRecord[] = []
  router.getRoutes().forEach(route => {
    if (route.meta.showInNavBar) navBarButtons.push(route)
  })
  return navBarButtons
})

</script>

<template>
  <aside id="navigation-bar">
    <NavigationBarHeader/>
    <div class="link-wrapper">
      <NavigationBarButton
          v-for="(route, index) of navBarButtons"
          :key="index"
          :route="route"
      />
    </div>
    <NavigationBarFooter/>
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
</style>