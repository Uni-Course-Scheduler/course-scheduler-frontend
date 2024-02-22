import type {ModuleFormatEnum as ModuleFormatType} from "@/models/enums/ModuleFormatEnum";
import type { IModuleFormatEvent } from "./IModuleFormatEvent";

export interface IModuleFormat {
    id: number
    title: string
    sws: number
    credits: number
    language: string
    type: ModuleFormatType
    event: IModuleFormatEvent
}