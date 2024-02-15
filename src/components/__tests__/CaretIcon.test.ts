import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import CaretIcon from '@/components/icons/CaretIcon.vue'
import {IconDirectionEnum} from '@/models/enums/IconDirectionEnum'

describe('CaretIcon', () => {

    it('renders default direction properly', () => {
        const wrapper = mount(CaretIcon)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with specified direction properly', () => {
        const wrapper = mount(CaretIcon, {props: {direction: IconDirectionEnum.UP}})
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('rotates caret UP', () => {
        const wrapper = mount(CaretIcon, {props: {direction: IconDirectionEnum.UP}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(90deg)')
    })

    it('rotates caret DOWN', () => {
        const wrapper = mount(CaretIcon, {props: {direction: IconDirectionEnum.DOWN}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(-90deg)')
    })

    it('rotates caret LEFT', () => {
        const wrapper = mount(CaretIcon, {props: {direction: IconDirectionEnum.LEFT}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(0deg)')
    })

    it('rotates caret RIGHT', () => {
        const wrapper = mount(CaretIcon, {props: {direction: IconDirectionEnum.RIGHT}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(180deg)')
    })
})
