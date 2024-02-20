import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";
import type {ModuleTypeEnum as ModuleType} from "@/models/enums/ModuleTypeEnum";

import type {ModuleFormat} from "@/models/classes/ModuleFormat";
import type { ModuleStatusEnum as ModuleStatusType } from "@/models/enums/ModuleStatusEnum";
import { ModuleStatusEnum } from "@/models/enums/ModuleStatusEnum";

export class Module {
    constructor(id: number, title: string, formats: ModuleFormat[], type: ModuleTypeEnum, status: ModuleStatusType) {
        this.id = id,
        this.title = title;
        this.formats = formats;
        this.type = type;
        this.status = status;
    }

     /** @var id of the module */
     private id: number;

    /** @var title of the module */
    private title: string;

    /** @var the formats of the module */
    private formats: ModuleFormat[];

    /** @var the type of the module */
    private type: ModuleType;

    private status: ModuleStatusType;

        /**
     * Get the id of the module
     *
     * @return string
     */
        public getId(): number {
            return this.id;
        }
    
        /**
         * Set the id of the module
         *
         * @param id - The id to set
         * @return void
         */
        public setId(id: number): void {
            this.id = id;
        }
    

    /**
     * Get the title of the module
     *
     * @return string
     */
    public getTitle(): string {
        return this.title;
    }

    /**
     * Set the title of the module
     *
     * @param title - The title to set
     * @return void
     */
    public setTitle(title: string): void {
        this.title = title;
    }

    /**
     * Get the formats of the module
     *
     * @return ModuleFormat[]
     */
    public getFormats(): ModuleFormat[] {
        return this.formats;
    }

    /**
     * Set the formats of the module
     *
     * @param format - ModuleFormat[]
     * @return void
     */
    public setFormats(formats: ModuleFormat[]): void {
        this.formats = formats;
    }

    /**
     * Get the type of the module
     *
     * @return ModuleType
     */
    public getType(): ModuleType {
        return this.type;
    }

    /**
     * Set the type of the module
     *
     * @param type - The type to set
     * @return void
     */
    public setType(type: ModuleType): void {
        this.type = type;
    }

    /**
     * Get the status of the module
     *
     * @return ModuleStatusType
     */
    public getStatus(): ModuleStatusType {
        return this.status;
    }

    /**
     * Set the status of the module
     *
     * @param type - The status to set
     * @return void
     */
    public setStatus(status: ModuleStatusType): void {
        this.status = status;
    }

    public copy(): Module {
        return new Module
        (
            this.id,
            this.title,
            this.formats,
            this.type,
            ModuleStatusEnum.PLANNED
        );
    }
}