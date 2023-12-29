import {RootState} from '../store';
import {RacesItem} from '@/api/types';
import {Status} from "@/constants/index";

export const getRacerInfoPage = (state: RootState): number =>
  state.racerInfo.page;

export const getRacerInfoLimit = (state: RootState): number =>
  state.racerInfo.limit;

export const getRacerInfoTotalItems = (state: RootState): number =>
  state.racerInfo.total;

export const getRacerInfoTotalPages = (state: RootState): number =>
  state.racerInfo.totalPages;

export const getRacerStatus = (state: RootState): Status =>
  state.racerInfo.status;

export const getRacerInfoRacesList = (state: RootState): RacesItem[] =>
  state.racerInfo.driverRacesList;
