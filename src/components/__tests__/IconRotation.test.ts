import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import CaretIcon from '@/components/icons/CaretIcon.vue'
import {IconDirectionEnum} from '@/models/enums/IconDirectionEnum'
import type {IDirectionTest} from "@/models/interfaces/IDirectionTest"

describe(`Tests if all icon rotation props work as intended`, () => {

    // All icons that have direction angles to test 
    const allIcons: IDirectionTest []= [
        {
            component: ArrowIcon,
            angle: {
                up: -90,
                down: 90,
                left: 180,
                right: 0,
            }
        },
        {
            component: CaretIcon,
            angle: {
                up: 90,
                down: -90,
                left: 0,
                right: 180,
            }
        }
    ]

    // Check for each icon component with direction prop if it renders the with the correct direction
    for (const IconComponent of allIcons) {

        it(`rotates ${IconComponent.component.name} UP`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.UP}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.up}deg)`)
        })

        it(`rotates ${IconComponent.component.name} DOWN`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.DOWN}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.down}deg)`)
        })

        it(`rotates ${IconComponent.component.name} LEFT`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.LEFT}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.left}deg)`)
        })

        it(`rotates ${IconComponent.component.name} RIGHT`, (): void => {
            const wrapper = mount(IconComponent.component, {props: {direction: IconDirectionEnum.RIGHT}})
            expect(wrapper.find('svg').element.style.transform).toContain(`rotate(${IconComponent.angle.right}deg)`)
        })
    }
})
