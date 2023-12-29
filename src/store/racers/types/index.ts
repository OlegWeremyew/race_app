import {RacerTableItem} from '@/components/RacersTable/types';
import {Status} from "@/constants/index";

export interface RacersTableType {
  racersList: RacerTableItem[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  status: Status;
}
