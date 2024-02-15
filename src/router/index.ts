import { createRouter, createWebHistory } from 'vue-router'
import SchedulerView from "@/views/SchedulerView.vue";
import ModuleView from "@/views/ModuleView.vue";
import ConflictView from "@/views/ConflictView.vue";
import ArchiveView from "@/views/ArchiveView.vue";
import SettingsView from "@/views/SettingsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scheduler',
      component: SchedulerView
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModuleView
    },
    {
      path: '/conflicts',
      name: 'conflicts',
      component: ConflictView
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
