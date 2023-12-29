import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RacersTableType} from './types';
import {RacerTableItem} from '@/components/RacersTable/types';
import {EMPTY_ARRAY, Status} from "@/constants/index";
import {fetchRacersList} from "@/store/racers/asyncActions";

const initialState: RacersTableType = {
  racersList: EMPTY_ARRAY as RacerTableItem[],
  status: Status.LOADING,
  page: 0,
  limit: 10,
  total: 0,
  totalPages: 0,
};

const racersSlice = createSlice({
    name: 'racers',
    initialState,
    reducers: {
      setRacersLimit(
        state: RacersTableType,
        action: PayloadAction<number>,
      ): void {
        state.limit = action.payload;
        state.page = 0;
      },
      setRacersPage(state: RacersTableType, action: PayloadAction<number>): void {
        state.page = action.payload;
      },
    },
    extraReducers: builder => {
      builder.addCase(fetchRacersList.pending, state => {
        state.status = Status.LOADING;
        state.racersList = EMPTY_ARRAY;
      });

      builder.addCase(fetchRacersList.fulfilled, (state, action) => {
        state.racersList = action.payload.MRData.DriverTable.Drivers;
        state.total = Number(action.payload.MRData.total);
        state.totalPages = Math.ceil(action.payload / state.total);
        state.status = Status.SUCCESS;
      });

      builder.addCase(fetchRacersList.rejected, state => {
        state.status = Status.ERROR;
        state.racersList = EMPTY_ARRAY;
      });
    },
  }
);

export const {
  setRacersLimit,
  setRacersPage,
} = racersSlice.actions;

export default racersSlice.reducer;
