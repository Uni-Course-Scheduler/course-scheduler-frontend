import {WeekDayEnum} from "@/models/enums/WeekDayEnum";
import type {WeekDayEnum as WeekDayType} from "@/models/enums/WeekDayEnum";

export class ModuleFormat {

    /** @var section number of the module */
    private section: number = 1

    /** @var day where the format takes place */
    private day: WeekDayType = WeekDayEnum.MO

    /** @var time where the format takes place */
    private time: string = ''

    /** @var how often the format takes place */
    private rhythm: string = ''

    /** @var duration of the format */
    private duration: string = ''

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
}