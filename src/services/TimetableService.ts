import type { Module } from "@/models/classes/Module";
import type { ITimetableResponse } from "@/models/interfaces/ITimetableResponse";

import axios from "axios"; 
import type { AxiosResponse } from "axios";

export default {
  async createTimetable(modules: Module[]): Promise<ITimetableResponse> {
    try {
      console.log(modules)
      const response: AxiosResponse<ITimetableResponse> = await axios.post(
        "http://localhost:5050/timetable",
        {
          modules: modules,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      switch (error.response?.status) {
        default:
          console.log(
            "FetchModuleService.ts no status case " + error.response?.status
          );
          break;
      }
    }
  },
};
