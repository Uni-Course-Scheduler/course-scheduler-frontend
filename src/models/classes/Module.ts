import { ModuleFormatEnum } from "@/models/enums/ModuleFormatEnum";
import type { ModuleFormatEnum as ModuleFormatType } from "@/models/enums/ModuleFormatEnum";
import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";
import type {ModuleTypeEnum as ModuleType} from "@/models/enums/ModuleTypeEnum";

export class Module {

    /** @var title of the module */
    private title: string = ''

    /** @var the format of the module */
    private format: ModuleFormatType = ModuleFormatEnum.SL

    /** @var the type of the module */
    private type: ModuleType = ModuleTypeEnum.P

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
     * Get the format of the module
     *
     * @return ModuleFormatType
     */
    public getFormat(): ModuleFormatType {
        return this.format;
    }

    /**
     * Set the format of the module
     *
     * @param format - The format to set
     * @return void
     */
    public setFormat(format: ModuleFormatType): void {
        this.format = format;
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
}