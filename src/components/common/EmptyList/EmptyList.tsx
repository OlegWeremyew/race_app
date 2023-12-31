import {FC, JSX, memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {EmptyListProps} from './types';

export const EmptyList: FC<EmptyListProps> = memo(({title}): JSX.Element => (
  <View>
    <Text style={styles.textStyle}>{title}</Text>
  </View>
));

const styles = StyleSheet.create({
  textStyle: {
    width: '100%',
    textAlign: 'center',
    marginTop: 20,
  },
});
