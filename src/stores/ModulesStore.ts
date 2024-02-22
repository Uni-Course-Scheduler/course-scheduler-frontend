import { ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import { Module } from "@/models/classes/Module";
import type { Module as ModuleType } from "@/models/classes/Module";
import FetchModulesService from "@/services/FetchModulesService";
import type { IModule } from "@/models/interfaces/IModule";
import type { IModuleFormat } from "@/models/interfaces/IModuleFormat";
import { ModuleFormat } from "@/models/classes/ModuleFormat";
import { ModuleFormatEvent } from "@/models/classes/ModuleFormatEvent";


export const useModulesStore = defineStore("modulesStore", () => {

  const allModules: Ref<Module[]> = ref([]);
  const selectedModules: Ref<Module[]> = ref([]);

  const parseToInstance = (moduleObjects: IModule[]) => {
    const tempModules: ModuleType[] = [];
    let electives: ModuleType[] = [];

    moduleObjects.forEach((moduleObject: IModule): void => {
      const formats = getFormats(moduleObject);

      if(moduleObject.electives) {
        electives = getElectives(moduleObject);
      }

      const module = new Module(
        moduleObject.id,
        moduleObject.title,
        formats,
        moduleObject.type,
        moduleObject.status,
        moduleObject.mainModuleId,
      );


      module.setElectives(electives);
      tempModules.push(module);
    });
    return tempModules;
  }

   async function fetchModules(semester: number): Promise<void> {
    const fetchedModules: IModule[] = await FetchModulesService.fetchModulesBySemester(semester);
    const tempModules = parseToInstance(fetchedModules);
    allModules.value = tempModules;
  }

  const getFormats = (moduleObject: IModule): ModuleFormat[] => {
    const formats: ModuleFormat[] = [];

    moduleObject.formats.forEach((moduleFormatObject: IModuleFormat): void => {
      const moduleFormat: ModuleFormat = new ModuleFormat(
        moduleFormatObject.id,
        moduleFormatObject.title,
        moduleFormatObject.sws,
        moduleFormatObject.credits,
        moduleFormatObject.language,
        moduleFormatObject.type,
      );
      if(moduleFormatObject.event) {

        moduleFormat.setEvent(
          new ModuleFormatEvent(
            moduleFormatObject.event.id,
            moduleFormatObject.event.section,
            moduleFormatObject.event.group,
            moduleFormatObject.event.start_date,
            moduleFormatObject.event.end_date,
            moduleFormatObject.event.start_time,
            moduleFormatObject.event.end_time,
            moduleFormatObject.event.rhythm,
            moduleFormatObject.event.room,
            moduleFormatObject.event.instructor,
            moduleFormatObject.event.weekday
          )
        )
      }
      formats.push(moduleFormat);
    });

    return formats;
  };


  const getElectives = (moduleObject: IModule): Module[] => {
    const electives: Module[] = [];

    moduleObject.electives.forEach((electiveObject: IModule): void => {
        const formats = getFormats(electiveObject);
      const elective: Module = new Module(
        electiveObject.id,
        electiveObject.title,
        formats,
        electiveObject.type,
        electiveObject.status,
        electiveObject.mainModuleId
      );
      electives.push(elective);
    });

    return electives;
  };

  return {
    allModules,
    selectedModules,
    fetchModules,
    parseToInstance,
  };
});
