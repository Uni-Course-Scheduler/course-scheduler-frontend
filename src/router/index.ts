import { createRouter, createWebHistory } from 'vue-router'
import SchedulerView from "@/views/SchedulerView.vue";
import ModuleView from "@/views/ModuleView.vue";
import ConflictView from "@/views/ConflictView.vue";
import ArchiveView from "@/views/ArchiveView.vue";
import SettingsView from "@/views/SettingsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
// Navigation Bar Icons
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import ModuleIcon from "@/components/icons/ModuleIcon.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";
import PlansIcon from "@/components/icons/PlansIcon.vue";
import GraduationCapIcon from "@/components/icons/GraduationCapIcon.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'scheduler',
      component: SchedulerView,
      meta: {
        showInNavBar: true,
        icon: CalendarIcon
      }
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModuleView,
      meta: {
        showInNavBar: true,
        icon: ModuleIcon
      }
    },
    {
      path: '/conflicts',
      name: 'conflicts',
      component: ConflictView,
      meta: {
        showInNavBar: true,
        icon: WarningIcon
      }
    },
    {
      path: '/archive',
      name: 'archive',
      component: ArchiveView,
      meta: {
        showInNavBar: true,
        icon: PlansIcon
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        showInNavBar: true,
        icon: GraduationCapIcon
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView,
      meta: {
        showInNavBar: false
      }
    }
  ]
})

export default router
