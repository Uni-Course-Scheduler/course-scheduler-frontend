import { WeekDayEnum } from "@/models/enums/WeekDayEnum";
import type { WeekDayEnum as WeekDayType } from "@/models/enums/WeekDayEnum";
export class ModuleFormatEvent {

    constructor(
        id: number,
        section: number,
        group: number,
        start_date: string,
        end_date: string,
        start_time: string,
        end_time: string,
        rhythm: string,
        room: string,
        instructor: string,
        weekday: WeekDayType
    ) {
        this.id = id;
        this.section = section;
        this.group = group;
        this.start_date = start_date;
        this.end_date = end_date;
        this.start_time = start_time;
        this.end_time = end_time;
        this.rhythm = rhythm;
        this.room = room;
        this.instructor = instructor;
        this.weekday = weekday
    };
    private id: number;
    private section: number;
    private group: number;
    private start_date: string;
    private end_date: string;
    private start_time: string;
    private end_time: string;
    private rhythm: string;
    private room: string;
    private instructor: string;
    private weekday: WeekDayType;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getSection(): number {
        return this.section;
    }

    public setSection(section: number): void {
        this.section = section;
    }

    public getGroup(): number {
        return this.group;
    }

    public setGroup(group: number): void {
        this.group = group;
    }

    public getStart_date(): string {
        return this.start_date;
    }

    public setStart_date(start_date: string): void {
        this.start_date = start_date;
    }

    public getEnd_date(): string {
        return this.end_date;
    }

    public setEnd_date(end_date: string): void {
        this.end_date = end_date;
    }

    public getStart_time(): string {
        return this.start_time;
    }

    public setStart_time(start_time: string): void {
        this.start_time = start_time;
    }

    public getEnd_time(): string {
        return this.end_time;
    }

    public setEnd_time(end_time: string): void {
        this.end_time = end_time;
    }

    public getRhythm(): string {
        return this.rhythm;
    }

    public setRhythm(rhythm: string): void {
        this.rhythm = rhythm;
    }

    public getRoom(): string {
        return this.room;
    }

    public setRoom(room: string): void {
        this.room = room;
    }

    public getInstructor(): string {
        return this.instructor;
    }

    public setInstructor(instructor: string): void {
        this.instructor = instructor;
    }

    public getWeekday(): WeekDayType {
        return this.weekday;
    }

    public setWeekday(weekday: WeekDayType): void {
        this.weekday = weekday;
    }

}