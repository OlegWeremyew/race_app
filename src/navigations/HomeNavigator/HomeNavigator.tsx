import {FC, JSX} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {RacersTableScreen} from '../../screens';
import {HomeStackParamList} from '../types';

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeNavigator: FC = (): JSX.Element => (
  <Stack.Navigator>
    <Stack.Screen
      name="RacersTableScreen"
      component={RacersTableScreen}
      options={{
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      }}
    />
  </Stack.Navigator>
);
