import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RacersTableType} from './types';
import {RacerTableItem} from '@/components/RacersTable/types';

const initialState: RacersTableType = {
  racersList: [] as RacerTableItem[],
  isLoading: false,
  page: 0,
  limit: 10,
  total: 0,
  totalPages: 0,
};

const racersSlice = createSlice({
  name: 'racers',
  initialState,
  reducers: {
    setRacersList(
      state: RacersTableType,
      action: PayloadAction<RacerTableItem[]>,
    ): void {
      state.racersList = action.payload;
    },
    setRacersLimit(
      state: RacersTableType,
      action: PayloadAction<number>,
    ): void {
      state.limit = action.payload;
      state.page = 0;
    },
    setRacersTotal(
      state: RacersTableType,
      action: PayloadAction<number>,
    ): void {
      state.total = action.payload;
      state.totalPages = Math.ceil(action.payload / state.total);
    },
    setRacersPage(state: RacersTableType, action: PayloadAction<number>): void {
      state.page = action.payload;
    },
    setLoadingStatus(
      state: RacersTableType,
      action: PayloadAction<boolean>,
    ): void {
      state.isLoading = action.payload;
    },
  },
});

export const {
  setRacersList,
  setRacersLimit,
  setRacersPage,
  setLoadingStatus,
  setRacersTotal,
} = racersSlice.actions;

export default racersSlice.reducer;
