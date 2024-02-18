import {ref, computed} from 'vue'
import type {Ref} from 'vue'
import {defineStore} from 'pinia'
import {Module} from "@/models/classes/Module";
import type {Module as ModuleType} from "@/models/classes/Module";
import FetchModulesService from "@/services/FetchModulesService";
import type {IModule} from "@/models/interfaces/IModule";
import type {IModuleFormat} from "@/models/interfaces/IModuleFormat";
import {ModuleFormat} from "@/models/classes/ModuleFormat";
import type {ModuleFormat as ModuleFormatType} from "@/models/classes/ModuleFormat";

export const useModulesStore = defineStore('modulesStore', () => {

        const allModules: Ref<ModuleType[]> = ref([])
        const selectedModules: Ref<ModuleType[]> = ref([])

        function fetchModules(semester: number): void {
            const tempModules: ModuleType[] = []
            const fetchedModules: IModule[] = FetchModulesService.fetchModulesBySemester(semester)
            fetchedModules.forEach((moduleObject: IModule): void => {
                const allModuleFormats: ModuleFormat[] = []
                moduleObject.format.forEach((moduleFormatObject: IModuleFormat): void => {
                    const moduleFormat: ModuleFormat = new ModuleFormat(
                        moduleFormatObject.section,
                        moduleFormatObject.title,
                        moduleFormatObject.day,
                        moduleFormatObject.time,
                        moduleFormatObject.rhythm,
                        moduleFormatObject.duration,
                        moduleFormatObject.type,
                    )
                    allModuleFormats.push(moduleFormat)
                })
                const module = new Module(
                    moduleObject.title,
                    allModuleFormats,
                    moduleObject.type
                )
                tempModules.push(module)
            })
            allModules.value = tempModules
        }

        return {
            allModules,
            selectedModules,
            fetchModules,
        }
    }
)
