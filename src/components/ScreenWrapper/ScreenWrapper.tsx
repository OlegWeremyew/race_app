import {FC, JSX} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScreenWrapperProps} from './types';

export const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
}): JSX.Element => <SafeAreaView>{children}</SafeAreaView>;
