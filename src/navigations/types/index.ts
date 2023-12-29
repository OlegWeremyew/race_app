import {NavigatorScreenParams} from "@react-navigation/native";
import {RouteProp} from "@react-navigation/core";

export type HomeStackParamList = {
  HomeNavigator: undefined
}

export type RacerAboutStackParamList = {
  RacerInfoScreen: {racerId: string};
  RacerSchemeScreen: {racerId: string, racerName: string};
};

export type RootStackParamList = {
  HomeNavigator: NavigatorScreenParams<HomeStackParamList>;
  RacerNavigator: NavigatorScreenParams<RacerAboutStackParamList>;
};

export type RacerCircuitsRouteProps = RouteProp<RacerAboutStackParamList, 'RacerSchemeScreen'>;
export type RacerInfoRouteProps = RouteProp<RacerAboutStackParamList, 'RacerInfoScreen'>;
