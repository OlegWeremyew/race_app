import {FC, useEffect} from "react";
import {DataTable} from "react-native-paper";
import {ScrollView, StyleSheet, Text} from "react-native";
import {useSelector} from "react-redux";
import {
  getRacerInfoLimit,
  getRacerInfoLoadingStatus,
  getRacerInfoPage,
  getRacerInfoRacesList,
} from "../../store/racerInfo/selectors";
import {RacesItem} from "../../api/types";
import {driversApi} from "../../api";
import {RacerCircuitsProps} from "./types";
import {useAppDispatch} from "../../hooks";
import {setCircuitsTotalPages, setDriverRacesList, setLoadingStatus,} from "../../store/racerInfo/slice";
import {Loader} from "../Loader";
import {RacesTablePaginator} from "../RacesTablePaginator";
import {TableHeaderRow} from "../TableHeaderRow";
import {EmptyList} from "../EmptyList";
import {RacesTableRow} from "../RacesTableRow";
import {setRacersTotal} from "../../store/racers/slice";
import {useNavigation} from "@react-navigation/core";

export const RacerCircuitsTable: FC<RacerCircuitsProps> = ({racerId, racerName}) => {

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const page = useSelector(getRacerInfoPage);
  const limit = useSelector(getRacerInfoLimit);
  const driverRacesList = useSelector(getRacerInfoRacesList);
  const isLoading = useSelector(getRacerInfoLoadingStatus);

  const goBack = (): void => {
    navigation.goBack()
  }

  useEffect(() => {
    dispatch(setLoadingStatus(true))
    driversApi.getRacerCircuitInformationById(racerId, limit, page)
      .then(({races, total}) => {
        dispatch(setDriverRacesList(races))
        dispatch(setRacersTotal(total))
        dispatch(setCircuitsTotalPages())
      }).finally(() => {
      dispatch(setLoadingStatus(false))
    })
  }, [limit, page])

  if (isLoading) {
    return (<Loader/>)
  }

  return (
    <ScrollView>
      <Text style={styles.screenTitle} onPress={goBack}>Go back</Text>
      <Text style={styles.racerIntro}>{racerName} race list:</Text>
      <DataTable>
        <TableHeaderRow first='Date' second='Race Name' third='Circuit Name' fourth='Country'/>
        {driverRacesList?.length ? (
          driverRacesList.map((race: RacesItem, index: number) => (
            <RacesTableRow key={index} race={race}/>
          ))
        ) : (
          <EmptyList title='Races list is empty'/>
        )}
        <RacesTablePaginator/>
      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  racerIntro: {
    padding: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  screenTitle: {
    margin: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
