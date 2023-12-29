/**
 * @format
 */

import {JSX} from 'react';
import {Provider} from 'react-redux';
import {Provider as NativePaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {store} from "@/store/store";
import {Navigations} from "../navigations";

enableFreeze(true);

export const App = (): JSX.Element => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NativePaperProvider>
        <Navigations/>
      </NativePaperProvider>
    </SafeAreaProvider>
  </Provider>
);
