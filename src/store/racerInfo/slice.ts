import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RacerInfoType} from './types';
import {RacesItem} from '@/api/types';
import {EMPTY_ARRAY, Status} from "@/constants/index";
import {fetchDriverRacesList} from "@/store/racerInfo/asyncActions";

const initialState: RacerInfoType = {
  driverRacesList: EMPTY_ARRAY as RacesItem[],
  page: 0,
  limit: 10,
  total: 0,
  totalPages: 0,
  status: Status.LOADING,
};

const racerInfoSlice = createSlice({
  name: 'racerInfo',
  initialState,
  reducers: {
    setRacesLimit(state: RacerInfoType, action: PayloadAction<number>): void {
      state.limit = action.payload;
      state.page = 0;
    },
    setRacesPage(state: RacerInfoType, action: PayloadAction<number>): void {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDriverRacesList.pending, state => {
      state.status = Status.LOADING;
      state.racersList = EMPTY_ARRAY;
    });

    builder.addCase(fetchDriverRacesList.fulfilled, (state, action) => {
      state.driverRacesList = action.payload.MRData.RaceTable.Races;
      state.total = Number(action.payload.MRData.total);
      state.totalPages = Math.ceil(action.payload / state.total);
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchDriverRacesList.rejected, state => {
      state.status = Status.ERROR;
      state.racersList = EMPTY_ARRAY;
    });
  }
});

export const {
  setRacesLimit,
  setRacesPage,
} = racerInfoSlice.actions;

export default racerInfoSlice.reducer;
