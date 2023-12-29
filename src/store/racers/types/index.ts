import {RacerTableItem} from "@/components/RacersTable/types";

export interface RacersTableType {
  racersList: RacerTableItem[]
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  isLoading: boolean
}
