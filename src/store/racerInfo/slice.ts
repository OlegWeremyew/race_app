import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RacerInfoType} from "./types";
import {RacesItem} from "../../api/types";
import {RacersTableType} from "../racers/types";

const initialState: RacerInfoType = {
  driverRacesList: [] as RacesItem[],
  page: 0,
  limit: 10,
  total: 0,
  totalPages: 0,
  isLoading: false,
};

const racerInfoSlice = createSlice({
  name: 'racerInfo',
  initialState,
  reducers: {
    setDriverRacesList(state: RacerInfoType, action: PayloadAction<RacesItem[]>): void {
      state.driverRacesList = action.payload
    },
    setRacesLimit(state: RacerInfoType, action: PayloadAction<number>): void {
      state.limit = action.payload;
      state.page = 0;
    },
    setRacesPage(state: RacerInfoType, action: PayloadAction<number>): void {
      state.page = action.payload;
    },
    setRacesTotal(state: RacerInfoType, action: PayloadAction<number>): void {
      state.total = action.payload;
    },
    setCircuitsTotalPages(state: RacerInfoType, action: PayloadAction<number>): void {
      state.totalPages = Math.ceil(action.payload / state.total);
    },
    setLoadingStatus(state: RacerInfoType, action: PayloadAction<boolean>): void {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setDriverRacesList,
  setRacesLimit,
  setRacesPage,
  setCircuitsTotalPages,
  setLoadingStatus,
} = racerInfoSlice.actions;

export default racerInfoSlice.reducer;
