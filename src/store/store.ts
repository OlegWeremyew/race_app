import {configureStore} from '@reduxjs/toolkit';
import racerInfo from './racerInfo/slice';
import racers from './racers/slice';

export const store = configureStore({
  reducer: {
    racers: racers,
    racerInfo: racerInfo,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export interface ThunkExtra {}
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtra;
  state: RootState;
}
