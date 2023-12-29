import {FC, JSX} from "react";
import {StyleSheet, Text} from "react-native";
import {useNavigation} from "@react-navigation/core";

export const GoBackButton: FC = (): JSX.Element => {
  const navigation = useNavigation();

  const goBack = (): void => {
    navigation.goBack();
  };

  return (
    <Text style={styles.screenTitle} onPress={goBack}>
      Go back
    </Text>
  )
}

const styles = StyleSheet.create({
  screenTitle: {
    margin: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});
