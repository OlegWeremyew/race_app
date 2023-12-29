import {FC, JSX, memo, useEffect} from 'react';
import {DataTable} from 'react-native-paper';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {getRacerInfoLimit, getRacerInfoPage, getRacerInfoRacesList, getRacerStatus,} from '@/store/racerInfo/selectors';
import {RacesItem} from '@/api/types';
import {RacerCircuitsProps} from './types';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {EmptyList, GoBackButton, Loader, TableHeaderRow} from '@/components/common';
import {RacesTablePaginator} from '../RacesTablePaginator';
import {RacesTableRow} from '../RacesTableRow';
import {fetchDriverRacesList} from "@/store/racerInfo/asyncActions";
import {Status} from "@/constants/index";

export const RacerCircuitsTable: FC<RacerCircuitsProps> = memo(
  ({racerId, racerName}): JSX.Element => {
    const dispatch = useAppDispatch();

    const page = useSelector(getRacerInfoPage);
    const limit = useSelector(getRacerInfoLimit);
    const driverRacesList = useSelector(getRacerInfoRacesList);
    const status = useSelector(getRacerStatus);

    useEffect(() => {
      dispatch(fetchDriverRacesList({racerId, limit, page}))
    }, [limit, page, racerId]);

    if (status === Status.LOADING) {
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
