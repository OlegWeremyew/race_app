import {FC, JSX, memo, useEffect} from 'react';
import {DataTable} from 'react-native-paper';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  getRacerInfoLimit,
  getRacerInfoLoadingStatus,
  getRacerInfoPage,
  getRacerInfoRacesList,
} from '@/store/racerInfo/selectors';
import {RacesItem} from '@/api/types';
import {driversApi} from '@/api/driversApi';
import {RacerCircuitsProps} from './types';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {setDriverRacesList, setLoadingStatus, setRacesTotal} from '@/store/racerInfo/slice';
import {TableHeaderRow, EmptyList, Loader, GoBackButton} from '@/components/common';
import {RacesTablePaginator} from '../RacesTablePaginator';
import {RacesTableRow} from '../RacesTableRow';

export const RacerCircuitsTable: FC<RacerCircuitsProps> = memo(
  ({racerId, racerName}): JSX.Element => {
    const dispatch = useAppDispatch();

    const page = useSelector(getRacerInfoPage);
    const limit = useSelector(getRacerInfoLimit);
    const driverRacesList = useSelector(getRacerInfoRacesList);
    const isLoading = useSelector(getRacerInfoLoadingStatus);

    useEffect(() => {
      dispatch(setLoadingStatus(true));
      driversApi
        .getRacerCircuitInformationById(racerId, limit, page)
        .then(({races, total}) => {
          dispatch(setDriverRacesList(races));
          dispatch(setRacesTotal(total));
        })
        .finally(() => {
          dispatch(setLoadingStatus(false));
        });
    }, [limit, page]);

    if (isLoading) {
      return <Loader/>;
    }

    return (
      <ScrollView>
        <GoBackButton/>
        <Text style={styles.racerIntro}>{racerName} race list:</Text>
        <DataTable>
          <TableHeaderRow
            first="Date"
            second="Race Name"
            third="Circuit Name"
            fourth="Country"
          />
          {driverRacesList?.length ? (
            driverRacesList.map((race: RacesItem, index: number) => (
              <RacesTableRow key={index} race={race}/>
            ))
          ) : (
            <EmptyList title="Races list is empty"/>
          )}
          <RacesTablePaginator/>
        </DataTable>
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  racerIntro: {
    padding: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
