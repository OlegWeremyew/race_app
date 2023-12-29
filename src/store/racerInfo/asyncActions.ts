import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "@/api/instance";
import {AxiosError} from "axios";

export const fetchDriverRacesList = createAsyncThunk(
  "racerInfo/fetchRacersList",
  async ({racerId, limit, page}, thunkAPI) => {
    try {
      const {data} = await instance.get(`/drivers/${racerId}/races.json`, {
        params: {
          limit,
          offset: page,
        },
      });
      return data;
    } catch (err: AxiosError) {
      console.log(err.message);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
