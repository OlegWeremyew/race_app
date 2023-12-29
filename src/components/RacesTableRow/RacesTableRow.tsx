import React, {FC} from 'react';
import {DataTable} from "react-native-paper";
import {RacerTableRowType} from "./types";

export const RacesTableRow: FC<RacerTableRowType> = ({race}) => (
  <DataTable.Row>
    <DataTable.Cell>{race.date}</DataTable.Cell>
    <DataTable.Cell>{race.raceName}</DataTable.Cell>
    <DataTable.Cell>{race.Circuit.circuitName}</DataTable.Cell>
    <DataTable.Cell>{race.Circuit.Location.country}</DataTable.Cell>
  </DataTable.Row>
);
