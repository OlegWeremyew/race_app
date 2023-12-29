import {FC, JSX} from "react";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {RacerInfoScreen, RacerSchemeScreen} from "../../screens";
import {RacerAboutStackParamList} from "../types";

const Stack = createStackNavigator<RacerAboutStackParamList>();

export const AboutRacerNavigator: FC = (): JSX.Element => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name="RacerInfoScreen"
      component={RacerInfoScreen}
      options={{
        ...TransitionPresets.DefaultTransition,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="RacerSchemeScreen"
      component={RacerSchemeScreen}
      options={{
        ...TransitionPresets.DefaultTransition,
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
