import {FC, JSX, useCallback, useEffect} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {RacerTableItem} from './types';
import {
  getLoadingStatus,
  getRacersLimit,
  getRacersList,
  getRacersPage,
} from '@/store/racers/selectors';
import {driversApi} from '@/api/driversApi';
import {
  setLoadingStatus,
  setRacersList,
  setRacersTotal,
} from '@/store/racers/slice';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {TableHeaderRow, Loader, EmptyList} from '@/components/common';
import {RacerTablePaginator} from '../RacerTablePaginator';
import {RacerTableRow} from '../RacerTableRow';

export const RacersTable: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const page = useSelector(getRacersPage);
  const limit = useSelector(getRacersLimit);
  const racersList = useSelector(getRacersList);
  const isLoading = useSelector(getLoadingStatus);

  const pressByRacerName = useCallback(
    (driverId: string): void => {
      navigation.navigate('AboutRacerNavigator', {
        screen: 'RacerInfoScreen',
        params: {
          racerId: driverId,
        },
      });
    },
    [navigation],
  );

  const pressByRacesCell = useCallback(
    (driverId: string, racerName: string): void => {
      navigation.navigate('AboutRacerNavigator', {
        screen: 'RacerSchemeScreen',
        params: {
          racerId: driverId,
          racerName,
        },
      });
    },
    [navigation],
  );

  useEffect(() => {
    dispatch(setLoadingStatus(true));
    driversApi
      .getDrivers(limit, page)
      .then(({racers, total}) => {
        dispatch(setRacersList(racers));
        dispatch(setRacersTotal(total));
      })
      .finally(() => {
        dispatch(setLoadingStatus(false));
      });
  }, [limit, page]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <Text style={styles.screenTitle}>Racers list</Text>
      <DataTable>
        <TableHeaderRow
          first="Name"
          second="Date Of Birth"
          third="Nationality"
          fourth="Races info"
        />
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
          <EmptyList title="Drivers list is empty" />
        )}
        <RacerTablePaginator />
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
