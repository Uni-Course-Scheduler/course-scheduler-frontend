import {WeekDayEnum} from "@/models/enums/WeekDayEnum";
import {ModuleFormatEnum} from "@/models/enums/ModuleFormatEnum";
import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";
import type {IModule} from "@/models/interfaces/IModule";

export default {

    /**
     *
     */
    fetchModulesBySemester(semester: number): IModule[] {
        return [
            {
                title: 'B1.6 Mathematik',
                format: [
                    {
                        section: 1,
                        title: 'B1.6 Mathematik (SL)',
                        day: WeekDayEnum.SA,
                        time: '09:45 bis 13:30',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.SL
                    },
                    {
                        section: 2,
                        title: 'B1.6 Mathematik (BÜ)',
                        day: WeekDayEnum.TH,
                        time: '13:45 bis 15:15',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.BÜ
                    },
                ],
                type: ModuleTypeEnum.P
            },
            {
                title: 'Grundlagen des Software-Engineering',
                format: [
                    {
                        section: 1,
                        title: 'B1.6 Mathematik (SL)',
                        day: WeekDayEnum.SA,
                        time: '09:45 bis 13:30',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.SL
                    },
                    {
                        section: 2,
                        title: 'B1.6 Mathematik (BÜ)',
                        day: WeekDayEnum.TH,
                        time: '13:45 bis 15:15',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.BÜ
                    },
                ],
                type: ModuleTypeEnum.P
            },
            {
                title: 'Grundlagen des Software-Engineering',
                format: [
                    {
                        section: 1,
                        title: 'B1.6 Mathematik (SL)',
                        day: WeekDayEnum.SA,
                        time: '09:45 bis 13:30',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.SL
                    },
                    {
                        section: 2,
                        title: 'B1.6 Mathematik (BÜ)',
                        day: WeekDayEnum.TH,
                        time: '13:45 bis 15:15',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.BÜ
                    },
                ],
                type: ModuleTypeEnum.P
            },
            {
                title: 'Einführung in die Wirtschaftsinformatik',
                format: [
                    {
                        section: 1,
                        title: 'B1.6 Mathematik (SL)',
                        day: WeekDayEnum.SA,
                        time: '09:45 bis 13:30',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.SL
                    },
                    {
                        section: 2,
                        title: 'B1.6 Mathematik (BÜ)',
                        day: WeekDayEnum.TH,
                        time: '13:45 bis 15:15',
                        rhythm: 'weekly',
                        duration: '07.10.2023 bis 03.02.2024',
                        type: ModuleFormatEnum.BÜ
                    },
                ],
                type: ModuleTypeEnum.P
            }
        ]
    }
}