import type {WeekDayEnum as WeekDayType} from "@/models/enums/WeekDayEnum";
import type {ModuleFormatEnum as ModuleFormatType} from "@/models/enums/ModuleFormatEnum";

export interface IModuleFormat {
    section: number
    title: string
    day: WeekDayType
    time: string
    rhythm: string
    duration: string
    type: ModuleFormatType
}