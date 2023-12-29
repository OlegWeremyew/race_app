import {AxiosError, AxiosResponse} from 'axios';
import {instance} from '../instance';
import {RacerTableItem} from '@/components/RacersTable/types';
import {RacerInformationResponseFromServer} from '../types';

export const driversApi = {
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
};
