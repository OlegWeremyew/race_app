/**
 * @format
 */

import {FC, JSX} from "react";
import {StyleSheet, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";

export const Loader: FC = (): JSX.Element => (
  <View style={styles.loader}>
    <ActivityIndicator animating size="large" color="red"/>
  </View>
);

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  }
});
