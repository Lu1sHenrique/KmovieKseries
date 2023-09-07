import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Routes from "./routes/routes";
import { NavigationContainer } from '@react-navigation/native';
import colors from './utils/colors';
import SplashScreen from 'react-native-splash-screen'

export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar
        hidden={false}
        backgroundColor={colors.lightRosa}
      />
      <Routes />
    </NavigationContainer>
  );
}
