import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "@/api/instance";
import {AxiosError} from "axios";

export const fetchRacersList = createAsyncThunk(
  "racers/fetchRacersList",
  async ({limit, page}, thunkAPI) => {
    try {
      const {data} = await instance.get('/drivers.json', {
        params: {
          limit,
          page,
        },
      });
      return data;
    } catch (err: AxiosError) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
