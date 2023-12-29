import {NavigationContainer} from "@react-navigation/native";
import {ProgressBar} from "react-native-paper";
import {createStackNavigator, TransitionPresets} from "@react-navigation/stack";
import {AboutRacerNavigator} from "./AboutRacerNavigator";
import {HomeNavigator} from "./HomeNavigator";
import {RootStackParamList} from "./types";
import {navigationRef} from "./navigationRef";
import {FC} from "react";

const Stack = createStackNavigator<RootStackParamList>();

export const Navigations: FC = () => (
  <NavigationContainer fallback={<ProgressBar/>} ref={navigationRef}>
    <Stack.Navigator initialRouteName="HomeNavigator">
      <Stack.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.DefaultTransition,
        }}
      />
      <Stack.Screen
        name="AboutRacerNavigator"
        component={AboutRacerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.DefaultTransition,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
