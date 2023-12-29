import {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenWrapperProps} from "./types";

export const ScreenWrapper: FC<ScreenWrapperProps> = ({children}) => (
  <SafeAreaView>{children}</SafeAreaView>
);


