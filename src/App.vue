<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from "@/components/navigation-bar/NavigationBar.vue";
</script>

<template>
  <NavigationBar />
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>