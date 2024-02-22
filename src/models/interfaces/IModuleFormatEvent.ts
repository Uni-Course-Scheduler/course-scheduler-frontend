import type {WeekDayEnum, WeekDayEnum as WeekDayType} from "@/models/enums/WeekDayEnum";

export interface IModuleFormatEvent {
    id: number
    section: number
    group: number
    start_time: string,
    end_time: string,
    start_date: string,
    end_date: string,
    room: string,
    instructor: string,
    day: WeekDayType
    time: string
    rhythm: string
    weekday: WeekDayEnum,
}