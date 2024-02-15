import {describe, it, expect} from 'vitest'
import {mount} from '@vue/test-utils'
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import {IconDirectionEnum} from '@/models/enums/IconDirectionEnum'

describe('ArrowIcon', () => {

    it('renders default direction properly', () => {
        const wrapper = mount(ArrowIcon)
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders with specified direction properly', () => {
        const wrapper = mount(ArrowIcon, {props: {direction: IconDirectionEnum.UP}})
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('rotates arrow for UP direction', () => {
        const wrapper = mount(ArrowIcon, {props: {direction: IconDirectionEnum.UP}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(-90deg)')
    })

    it('rotates arrow for DOWN direction', () => {
        const wrapper = mount(ArrowIcon, {props: {direction: IconDirectionEnum.DOWN}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(90deg)')
    })

    it('rotates arrow for LEFT direction', () => {
        const wrapper = mount(ArrowIcon, {props: {direction: IconDirectionEnum.LEFT}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(180deg)')
    })

    it('rotates arrow for RIGHT direction', () => {
        const wrapper = mount(ArrowIcon, {props: {direction: IconDirectionEnum.RIGHT}})
        expect(wrapper.find('svg').element.style.transform).toContain('rotate(0deg)')
    })
})
