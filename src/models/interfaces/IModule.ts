import type {IModuleFormat} from "@/models/interfaces/IModuleFormat";
import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";

export interface IModule {
    title: string
    format: IModuleFormat[]
    type: ModuleTypeEnum
}