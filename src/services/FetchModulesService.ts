import type { AxiosResponse } from "axios";



import type {IModule} from "@/models/interfaces/IModule";
import axios from "axios";

export default {

    /**
     *
     */
    async fetchModulesBySemester(semester: number): Promise<IModule[]> {
        try {
            const response: AxiosResponse<IModule[]> = await axios.get(`http://localhost:5050/modules?cid=1&variant=1&semester=${semester}`);
            return response.data;
        } catch (error) {
            switch (error.response?.status) {
                default:
                    console.log(
                        'FetchModuleService.ts no status case ' + error.response?.status
                    );
                    break;
            }
            return [];
        }
    }
}