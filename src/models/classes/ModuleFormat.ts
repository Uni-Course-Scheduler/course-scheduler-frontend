import {WeekDayEnum} from "@/models/enums/WeekDayEnum";
import type {WeekDayEnum as WeekDayType} from "@/models/enums/WeekDayEnum";
import { ModuleFormatEnum } from "@/models/enums/ModuleFormatEnum";
import type { ModuleFormatEnum as ModuleFormatType } from "@/models/enums/ModuleFormatEnum";
export class ModuleFormat {
    constructor(section: number, title: string, day: WeekDayEnum, time: string, rhythm: string, duration: string, type: ModuleFormatEnum) {
        this.section = section;
        this.title = title;
        this.day = day;
        this.time = time;
        this.rhythm = rhythm;
        this.duration = duration;
        this.type = type;
    }

    /** @var section number of the module */
    private section: number = 1

    /** @var title of the module */
    private title: string = ''

    /** @var day where the format takes place */
    private day: WeekDayType = WeekDayEnum.MO

    /** @var time where the format takes place */
    private time: string = ''

    /** @var how often the format takes place */
    private rhythm: string = ''

    /** @var duration of the format */
    private duration: string = ''

    /** @var type of the format */
    private type: ModuleFormatType = ModuleFormatEnum.SL

    /**
     * Get the section number of the module
     *
     * @return number
     */
    public getSection(): number {
        return this.section
    }

    /**
     * Set the section number of the module
     *
     * @return void
     */
    public setSection(section: number): void {
        this.section = section
    }

    /**
     * Get the title of the module format
     *
     * @return string
     */
    public getTitle(): string {
        return this.title;
    }

    /**
     * Set the title of the module format
     *
     * @param title - The title to set
     * @return void
     */
    public setTitle(title: string): void {
        this.title = title;
    }

    /**
     * Get the day of the module format
     *
     * @return WeekDayType
     */
    public getDay(): WeekDayType {
        return this.day;
    }

    /**
     * Set the day of the module format
     *
     * @param day - The day to set
     * @return void
     */
    public setDay(day: WeekDayType): void {
        this.day = day;
    }

    /**
     * Get the time of the module format
     *
     * @return string
     */
    public getTime(): string {
        return this.time;
    }

    /**
     * Set the time of the module format
     *
     * @param time - The time to set
     * @return void
     */
    public setTime(time: string): void {
        this.time = time;
    }

    /**
     * Get the rhythm of the module format
     *
     * @return string
     */
    public getRhythm(): string {
        return this.rhythm;
    }

    /**
     * Set the rhythm of the module format
     *
     * @param rhythm - The rhythm to set
     * @return void
     */
    public setRhythm(rhythm: string): void {
        this.rhythm = rhythm;
    }

    /**
     * Get the duration of the module format
     *
     * @return string
     */
    public getDuration(): string {
        return this.duration;
    }

    /**
     * Set the duration of the module format
     *
     * @param duration - The duration to set
     * @return void
     */
    public setDuration(duration: string): void {
        this.duration = duration;
    }

    /**
     * Get the type of the module format
     *
     * @return ModuleFormatType
     */
    public getType(): ModuleFormatType {
        return this.type;
    }

    /**
     * Set the type of the module format
     *
     * @param type - ModuleFormatType
     * @return void
     */
    public setType(type: ModuleFormatType): void {
        this.type = type;
    }
}