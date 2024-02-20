import { ColoredWrapperEnum } from "@/models/enums/ColoredWrapperEnum";
import type { ColoredWrapperEnum as ColoredWrapperType } from "@/models/enums/ColoredWrapperEnum";
import { ModuleStatusEnum } from "@/models/enums/ModuleStatusEnum";
import type { ModuleStatusEnum as ModuleStatusType } from "@/models/enums/ModuleStatusEnum";

export const getColorForStatus = (
  status: ModuleStatusType
): ColoredWrapperType => {
  switch (status) {
    case ModuleStatusEnum.PLANNED:
      return ColoredWrapperEnum.BLUE;
    case ModuleStatusEnum.REQUESTED:
      return ColoredWrapperEnum.YELLOW;
    case ModuleStatusEnum.ACCEPTED:
      return ColoredWrapperEnum.GREEN;
    default:
      return ColoredWrapperEnum.GREY;
  }
};
