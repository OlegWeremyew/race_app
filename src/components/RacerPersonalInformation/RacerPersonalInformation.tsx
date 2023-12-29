import {FC, JSX, memo, useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Card} from 'react-native-paper';
import {useSelector} from "react-redux";
import {driversApi} from '@/api/driversApi';
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {GoBackButton, Loader} from "@/components/common";
import {RacerTableItem} from '../RacersTable/types';
import {RacerInfoProps} from './types';
import {getRacerStatus} from "@/store/racerInfo/selectors";
import {Status} from "@/constants/index";

export const RacerPersonalInformation: FC<RacerInfoProps> = memo(
  ({racerId}): JSX.Element => {
    const navigation = useNavigation<any>();
    const dispatch = useAppDispatch();

    const status = useSelector(getRacerStatus);

    const [driverInfo, setDriverInfo] = useState<RacerTableItem>(
      {} as RacerTableItem,
    );

    const goToDriverRaceList = (): void => {
      navigation.navigate('AboutRacerNavigator', {
        screen: 'RacerSchemeScreen',
        params: {
          racerId,
          racerName: `${driverInfo.givenName} ${driverInfo.familyName}.`,
        },
      });
    };

    useEffect(() => {
      driversApi.getRacerInformationById(racerId)
        .then(driver => {
          setDriverInfo(driver);
        })
    }, [racerId]);

    if (status === Status.LOADING) {
      return <Loader/>;
    }

    return (
      <>
        <GoBackButton/>
        <Text style={styles.screenTitle}>Racer Information</Text>
        <Card style={styles.cardWrapper}>
          <Card.Content>
            <Text style={styles.boldText}>
              Name:{' '}
              <Text
                style={
                  styles.normalWeight
                }>{`${driverInfo.givenName} ${driverInfo.familyName}.`}</Text>
            </Text>
            <Text style={styles.boldText}>
              Nationality:{' '}
              <Text style={styles.normalWeight}>{driverInfo.nationality}.</Text>
            </Text>
            <Text style={styles.boldText}>
              Permanent Number:{' '}
              <Text style={styles.normalWeight}>
                {driverInfo.permanentNumber}.
              </Text>
            </Text>
            <Text style={styles.boldText}>
              Code:{' '}
              <Text style={styles.normalWeight}>"{driverInfo.code}".</Text>
            </Text>
            <Text style={styles.boldText}>
              Date of birth:{' '}
              <Text style={styles.normalWeight}>{driverInfo.dateOfBirth}.</Text>
            </Text>
          </Card.Content>
        </Card>
        <Text style={styles.redirectText} onPress={goToDriverRaceList}>
          Open driver race list
        </Text>
      </>
    );
  },
);

const styles = StyleSheet.create({
  screenTitle: {
    margin: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  arrowBack: {
    margin: 10,
    width: 50,
    height: 50,
  },
  cardWrapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  boldText: {
    color: '#000',
    fontWeight: 'bold',
  },
  normalWeight: {
    color: '#2a2626',
    fontWeight: 'normal',
  },
  redirectText: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'gray',

    fontWeight: 'normal',
    width: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});
