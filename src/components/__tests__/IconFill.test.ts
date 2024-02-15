import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import type {Component} from "vue";
import AddPlanIcon from "@/components/icons/AddPlanIcon.vue";
import ArrowIcon from "@/components/icons/ArrowIcon.vue";
import CalendarIcon from "@/components/icons/CalendarIcon.vue";
import CaretIcon from "@/components/icons/CaretIcon.vue";
import CheckIcon from "@/components/icons/CheckIcon.vue";
import GraduationCapIcon from "@/components/icons/GraduationCapIcon.vue";
import ModuleIcon from "@/components/icons/ModuleIcon.vue";
import PlansIcon from "@/components/icons/PlansIcon.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
import SyncIcon from "@/components/icons/SyncIcon.vue";
import UserIcon from "@/components/icons/UserIcon.vue";
import WarningIcon from "@/components/icons/WarningIcon.vue";

describe('Tests if all icon fill props work as intended', (): void => {

    const sampleIconFill: string = '#2ECC71';
    const defaultIconFill: string = '#FFFFFF';

    // All icons that have direction angles to test
    const allIcons: Component[] = [
        AddPlanIcon,
        ArrowIcon,
        CalendarIcon,
        CaretIcon,
        CheckIcon,
        GraduationCapIcon,
        ModuleIcon,
        PlansIcon,
        SearchIcon,
        SyncIcon,
        UserIcon,
        WarningIcon
    ];

    // Check for each icon component if it renders the default fill or a custom fill properly
    for (const IconComponent of allIcons) {
        it(`sets the default fill value correctly for ${IconComponent.name}`, (): void => {
            const wrapper = mount(IconComponent);
            expect(wrapper.find('svg').attributes('fill')).toBe(defaultIconFill);
        });

        it(`sets the fill attribute correctly for ${IconComponent.name}`, (): void => {
            const wrapper = mount(IconComponent, { props: { fill: sampleIconFill } });
            expect(wrapper.find('svg').attributes('fill')).toBe(sampleIconFill);
        });
    }
});
