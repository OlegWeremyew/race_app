import {FC, JSX, memo} from 'react';
import {DataTable} from "react-native-paper";
import {StyleSheet} from "react-native";
import {HeaderInterface} from "./types";

export const TableHeaderRow: FC<HeaderInterface> = memo(({first, second, third, fourth}): JSX.Element => (
  <DataTable.Header style={styles.container}>
    <DataTable.Title>{first}</DataTable.Title>
    <DataTable.Title>{second}</DataTable.Title>
    <DataTable.Title>{third}</DataTable.Title>
    <DataTable.Title>{fourth}</DataTable.Title>
  </DataTable.Header>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
    borderTopWidth: 1,
  },
});
