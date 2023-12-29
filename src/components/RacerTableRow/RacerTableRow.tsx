import React, {FC} from 'react';
import {DataTable} from "react-native-paper";
import {RacerTableRowType} from "./types";

export const RacerTableRow: FC<RacerTableRowType> = ({racer, nameHandlerClick, racesHandleClick}) => (
  <DataTable.Row>
    <DataTable.Cell onPress={() => nameHandlerClick(racer.driverId)}>
      {`${racer.givenName} ${racer.familyName}`}
    </DataTable.Cell>
    <DataTable.Cell>{racer.dateOfBirth}</DataTable.Cell>
    <DataTable.Cell>{racer.nationality}</DataTable.Cell>
    <DataTable.Cell onPress={() => racesHandleClick(racer.driverId, `${racer.givenName} ${racer.familyName}`)}>
      Open Races
    </DataTable.Cell>
  </DataTable.Row>
);
