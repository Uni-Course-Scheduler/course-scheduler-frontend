import {ModuleTypeEnum} from "@/models/enums/ModuleTypeEnum";
import type {ModuleTypeEnum as ModuleType} from "@/models/enums/ModuleTypeEnum";
import type {ModuleFormat} from "@/models/classes/ModuleFormat";

export class Module {
    constructor(id: number, title: string, format: ModuleFormat[], type: ModuleTypeEnum) {
        this.id = id,
        this.title = title;
        this.format = format;
        this.type = type;
    }

     /** @var id of the module */
     private id: number;

    /** @var title of the module */
    private title: string = ''

    /** @var the format of the module */
    private format: ModuleFormat[] = []

    /** @var the type of the module */
    private type: ModuleType = ModuleTypeEnum.P

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
     * Get the format of the module
     *
     * @return ModuleFormat[]
     */
    public getFormat(): ModuleFormat[] {
        return this.format;
    }

    /**
     * Set the format of the module
     *
     * @param format - ModuleFormat[]
     * @return void
     */
    public setFormat(format: ModuleFormat[]): void {
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