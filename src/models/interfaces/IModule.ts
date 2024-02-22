import type { IModuleFormat } from "@/models/interfaces/IModuleFormat";
import { ModuleTypeEnum } from "@/models/enums/ModuleTypeEnum";
import type { ModuleStatusEnum as ModuleStatusType } from "@/models/enums/ModuleStatusEnum";

export interface IModule {
  id: number;
  title: string;
  formats: IModuleFormat[];
  electives: IModule[];
  type: ModuleTypeEnum;
  status: ModuleStatusType;
  mainModuleId: number
}
