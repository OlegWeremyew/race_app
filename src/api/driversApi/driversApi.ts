import {AxiosError, AxiosResponse} from 'axios';
import {instance} from '../instance';
import {RacerTableItem} from '@/components/RacersTable/types';
import {
  RacerCircuitInformationResponseFromServer,
  RacerInformationResponseFromServer,
  RacesItem,
} from '../types';

export const driversApi = {
  async getDrivers(
    limit: number,
    page: number,
  ): Promise<{racers: RacerTableItem[]; total: number}> {
    try {
      const {data} = await instance.get<
        AxiosResponse<RacerInformationResponseFromServer>
      >('/drivers.json', {
        params: {
          limit,
          page,
        },
      });
      return {
        racers: data.MRData.DriverTable.Drivers,
        total: Number(data.MRData.total),
      };
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getRacerInformationById(id: string): Promise<RacerTableItem> {
    try {
      const {data} = await instance.get<
        AxiosResponse<RacerInformationResponseFromServer>
      >(`/drivers/${id}.json`);
      return data.MRData.DriverTable.Drivers[0];
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
  async getRacerCircuitInformationById(
    id: string,
    limit: number,
    page: number,
  ): Promise<{races: RacesItem[]; total: number}> {
    try {
      const {data} = await instance.get<
        AxiosResponse<RacerCircuitInformationResponseFromServer>
      >(`/drivers/${id}/races.json`, {
        params: {
          limit,
          page,
        },
      });
      return {
        races: data.MRData.RaceTable.Races,
        total: Number(data.MRData.total),
      };
    } catch (e: AxiosError) {
      console.log(e.message);
    }
  },
};
