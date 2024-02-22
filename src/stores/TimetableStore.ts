import { ref, computed } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import type { Module } from "@/models/classes/Module";
import type { IModule } from "@/models/interfaces/IModule";
import type { ITimetableEvent } from "@/models/interfaces/ITimetableEvent";
import TimetableService from "@/services/TimetableService";
import type { ITimetableResponse } from "@/models/interfaces/ITimetableResponse";

export const useTimetableStore = defineStore("timetableStore", () => {
 
    const events: Ref<ITimetableEvent[]> = ref([]);

    const createTimetable = async (modules: Module[]): Promise<IModule[]> => {
        const response: ITimetableResponse =
         await TimetableService.createTimetable(modules);
        events.value = response.events;
        return response.modules;
    }
  return {
   events,
   createTimetable
  };
});
