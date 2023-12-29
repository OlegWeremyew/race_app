import {StyleSheet, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import {FC} from "react";

export const Loader: FC = () => (
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
