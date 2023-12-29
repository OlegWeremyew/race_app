import {RacerTableItem} from "../../RacersTable/types";

export interface RacerTableRowType {
  racer: RacerTableItem,
  nameHandlerClick: (driverId: string) => void
  racesHandleClick: (driverId: string, racerName: string) => void
}
