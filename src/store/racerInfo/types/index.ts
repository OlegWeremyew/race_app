import {RacesItem} from "../../../api/types";

export interface RacerInfoType {
  driverRacesList: RacesItem[]
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  isLoading: boolean
}
