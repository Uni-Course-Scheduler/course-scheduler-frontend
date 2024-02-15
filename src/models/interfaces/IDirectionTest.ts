import type {Component} from "vue";

export interface IDirectionTest {
    component: Component
    angle: {
        up: number
        down: number
        left: number
        right: number
    }
}