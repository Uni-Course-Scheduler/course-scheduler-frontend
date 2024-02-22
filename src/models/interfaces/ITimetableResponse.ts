import type { IModule } from "./IModule";
import type { ITimetableEvent } from "./ITimetableEvent";

export interface ITimetableResponse {
    events: ITimetableEvent[]
    modules: IModule[]
}