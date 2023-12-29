import {RacerTableItem} from "../../components/RacersTable/types";

export interface RacerInformationResponseFromServer {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    DriverTable: {
      Drivers: RacerTableItem[];
    };
  };
}

export interface RacesItem {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
  date: string;
}

export interface RacerCircuitInformationResponseFromServer {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      driverId: string
      "Races": RacesItem[];
    };
  };
}
