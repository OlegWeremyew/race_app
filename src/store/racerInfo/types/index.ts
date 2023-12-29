import {RacesItem} from '@/api/types';
import {Status} from "@/constants/index";

export interface RacerInfoType {
  driverRacesList: RacesItem[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  status: Status;
}
