import {AxiosError, AxiosResponse} from "axios";
import {instance} from "../instance";
import {RacerTableItem} from "@/components/RacersTable/types";
import {RacerCircuitInformationResponseFromServer, RacerInformationResponseFromServer} from "../types";

export const driversApi = {
  async getDrivers(limit: number, page: number): Promise<RacerTableItem[]> {
    try {
      const {data} = await instance.get<AxiosResponse<RacerInformationResponseFromServer>>(`/drivers.json`, {
        params: {
          limit,
          page,
        }
      });
      return data.MRData.DriverTable.Drivers;
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getDriversRacesInformation(): Promise<number> {
    try {
      const {data} = await instance.get<AxiosResponse<RacerInformationResponseFromServer>>(`/drivers.json`);
      return Number(data.MRData.total);
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getRacerInformationById(id: string): Promise<RacerTableItem> {
    try {
      const {data} = await instance.get<AxiosResponse<RacerInformationResponseFromServer>>(`/drivers/${id}.json`);
      return data.MRData.DriverTable.Drivers[0];
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getRacerCircuitInformationById(id: string, limit: number, page: number): Promise<any> {
    try {
      const {data} = await instance.get<AxiosResponse<RacerCircuitInformationResponseFromServer>>(`/drivers/${id}/races.json`, {
        params: {
          limit,
          page,
        }
      });
      return {
        races: data.MRData.RaceTable.Races,
        total: data.MRData.total,
      }
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getRacesTotalValue(id: string): Promise<number> {
    try {
      const {data} = await instance.get<AxiosResponse<RacerInformationResponseFromServer>>(`/drivers/${id}/races.json`);
      return Number(data.MRData.total);
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
};
