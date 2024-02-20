import type {IModuleFormat} from "@/models/interfaces/IModuleFormat";
import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";

export interface IModule {
    id: number,
    title: string
    format: IModuleFormat[]
    type: ModuleTypeEnum
}