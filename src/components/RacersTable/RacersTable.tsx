import {FC, useCallback, useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";
import {DataTable} from "react-native-paper";
import {useNavigation} from "@react-navigation/core";
import {useSelector} from "react-redux";
import {RacerTableItem} from "./types";
import {getLoadingStatus, getRacersLimit, getRacersList, getRacersPage} from "../../store/racers/selectors";
import {RacerTablePaginator} from "../RacerTablePaginator";
import {driversApi} from "../../api";
import {
  setLoadingStatus,
  setRacersList,
  setRacersTotal,
  setRacersTotalPages
} from "../../store/racers/slice";
import {useAppDispatch} from "../../hooks";
import {Loader} from "../Loader";
import {RacerTableRow} from "../RacerTableRow";
import {TableHeaderRow} from "../TableHeaderRow";
import {EmptyList} from "../EmptyList";

export const RacersTable: FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const page = useSelector(getRacersPage);
  const limit = useSelector(getRacersLimit);
  const racersList = useSelector(getRacersList);
  const isLoading = useSelector(getLoadingStatus);

  const pressByRacerName =  useCallback((driverId: string): void => {
    navigation.navigate('AboutRacerNavigator', {
      screen: 'RacerInfoScreen',
      params: {
        racerId: driverId,
      },
    });
  }, [navigation])

  const pressByRacesCell = useCallback((driverId: string, racerName: string): void => {
    navigation.navigate('AboutRacerNavigator', {
      screen: 'RacerSchemeScreen',
      params: {
        racerId: driverId,
        racerName,
      },
    });
  }, [navigation])

  useEffect
  (() => {
    dispatch(setLoadingStatus(true))
    driversApi.getDrivers(limit, page)
      .then((data) => {
        dispatch(setRacersList(data));
      })
      .finally(() => {
        dispatch(setLoadingStatus(false))
      })
  }, [limit, page]);

  useEffect(() => {
    dispatch(setLoadingStatus(true))
    driversApi.getDriversRacesInformation()
      .then((total) => {
        dispatch(setRacersTotal(total))
        dispatch(setRacersTotalPages())
      })
      .finally(() => {
        dispatch(setLoadingStatus(false))
      })
  }, []);

  if (isLoading) {
    return (<Loader/>)
  }

  return (
    <ScrollView>
      <Text style={styles.screenTitle}>Racers list</Text>
      <DataTable>
        <TableHeaderRow first='Name' second='Date Of Birth' third='Nationality' fourth='Races info'/>
        {racersList.length ? (
          racersList.map((racer: RacerTableItem, index: number) => (
              <RacerTableRow
                key={racer.driverId + index}
                racer={racer}
                nameHandlerClick={pressByRacerName}
                racesHandleClick={pressByRacesCell}
              />
          ))
        ) : (
          <EmptyList title='Drivers list is empty'/>
        )}
        <RacerTablePaginator/>
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenTitle: {
    margin: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
