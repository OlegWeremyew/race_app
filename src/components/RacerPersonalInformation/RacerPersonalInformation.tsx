import {FC, JSX, memo, useEffect, useState} from 'react';
import {StyleSheet, Text} from "react-native";
import {useNavigation} from "@react-navigation/core";
import {Card} from "react-native-paper";
import {driversApi} from "../../api";
import {RacerTableItem} from "../RacersTable/types";
import {RacerInfoProps} from "./types";

export const RacerPersonalInformation: FC<RacerInfoProps> = memo(({racerId}): JSX.Element => {
  const navigation = useNavigation();

  const [driverInfo, setDriverInfo] = useState<RacerTableItem>({} as RacerTableItem)

  const goBack = (): void => {
    navigation.goBack()
  }

  useEffect(() => {
    driversApi.getRacerInformationById(racerId).then((driver) => {
      setDriverInfo(driver)
    })
  }, [racerId])

  return (
    <>
      <Text style={styles.screenTitle} onPress={goBack}>Go back</Text>
      <Text style={styles.screenTitle}>Racer Information</Text>
      <Card style={styles.cardWrapper}>
        <Card.Content>
          <Text style={styles.boldText}>Name: <Text style={styles.normalWeight}>{`${driverInfo.givenName} ${driverInfo.familyName}.`}</Text></Text>
          <Text style={styles.boldText}>Nationality: <Text style={styles.normalWeight}>{driverInfo.nationality}.</Text></Text>
          <Text style={styles.boldText}>Permanent Number: <Text  style={styles.normalWeight}>{driverInfo.permanentNumber}.</Text></Text>
          <Text style={styles.boldText}>Code: <Text style={styles.normalWeight}>"{driverInfo.code}".</Text></Text>
          <Text style={styles.boldText}>Date of birth: <Text  style={styles.normalWeight}>{driverInfo.dateOfBirth}.</Text></Text>
        </Card.Content>
      </Card>
    </>
  );
});

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
    marginRight: 10
  },
  boldText: {
    color: '#000',
    fontWeight: 'bold',
  },
  normalWeight: {
    color: '#2a2626',
    fontWeight: 'normal',
  }
});
