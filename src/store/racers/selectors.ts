import {RootState} from '../store';
import {RacerTableItem} from '@/components/RacersTable/types';
import {Status} from "@/constants/index";

export const getRacersPage = (state: RootState): number => state.racers.page;

export const getRacersLimit = (state: RootState): number => state.racers.limit;

export const getRacersTotalItems = (state: RootState): number =>
  state.racers.total;

export const getRacersTotalPages = (state: RootState): number =>
  state.racers.totalPages;

export const getRacersList = (state: RootState): RacerTableItem[] =>
  state.racers.racersList;

export const getStatus = (state: RootState): Status =>
  state.racers.status;
