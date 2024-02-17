import {describe, it, expect} from 'vitest'
import { mount } from '@vue/test-utils';
import {createRouter, createMemoryHistory} from 'vue-router';
import type {Router, RouteRecordRaw} from 'vue-router';
import SchedulerView from "@/views/SchedulerView.vue";
import ModuleView from "@/views/ModuleView.vue";
import NavigationBarButton from '@/components/navigation-bar/NavigationBarButton.vue';
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import ModuleIcon from "@/components/icons/ModuleIcon.vue";
import {i18n} from "@/i18n";


describe('NavigationBarButton', () => {

    // Example route that will be used as test object
    const exampleRoute: RouteRecordRaw = {
        path: '/',
        name: 'scheduler',
        component: SchedulerView,
        meta: {
            showInNavBar: true,
            navBarTitle: 'Uni Einstellungen',
            icon: CalendarIcon
        }
    }

    // router instance for the tests
    const router: Router = createRouter({
        history: createMemoryHistory(),
        routes: [
            exampleRoute, // example route that will be used for comparison
            {
                path: '/modules',
                name: 'modules',
                component: ModuleView,
                meta: {
                    showInNavBar: true,
                    navBarTitle: 'Modulübersicht',
                    icon: ModuleIcon
                }
            }
        ]
    })

    // Create navigation bar button wrappper for the tests
    const wrapper = mount(NavigationBarButton, {
        global: { plugins: [router, i18n] },
        props: {route: exampleRoute}
    })

    it('renders the button wrapper', async () => {
        await router.isReady()
        expect(wrapper.exists()).toBe(true)
    });

    it('renders with the correct router link to attribute', async () => {
        const routerLink = wrapper.findComponent({ name: 'RouterLink' })
        expect(routerLink.props('to')).toEqual({ name: 'scheduler' })
    });

/*
    it('renders with the correct navigation bar button text', async () => {
        expect(wrapper.find('span').text()).toBe('Uni Einstellungen')
    });
*/

    it('renders with the correct navigation bar icon', async () => {
        expect(wrapper.findComponent({ name: 'CalendarIcon' }).exists()).toBe(true)
    });

    it('renders with active style when route is active', async () => {
        // Check if the button related to the example route has the active class is applied
        expect(wrapper.classes('router-link-active')).toBe(true)

        // Simulate a route change to another view
        await router.push({ name: 'modules' })

        // Wait for the router to finish the navigation
        await wrapper.vm.$nextTick()

        // Button from example route shouldn't have active class now
        expect(wrapper.classes('router-link-active')).toBe(false)
    });

    /*it('renders with a non-empty multilingual title', async () => {
        // Wait for the computed property to be updated
        await wrapper.vm.$nextTick()

        // Check if the multilingualTitle is not an empty string
        expect(wrapper.vm.multilingualTitle).toBeTruthy()
    });*/
});
