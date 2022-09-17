import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import MainStack from '@routes/MainStack';
import {navigationRef} from '@utils/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {theme} from '@typings/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const CustomNavigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.screenBackground,
  },
};

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer theme={CustomNavigationTheme} ref={navigationRef}>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
