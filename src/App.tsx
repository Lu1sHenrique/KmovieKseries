import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from "./routes/routes";
import { NavigationContainer } from '@react-navigation/native';
import colors from './utils/colors';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
          hidden={false}
          backgroundColor={colors.lightRosa}
        />
      <Routes/>
    </NavigationContainer>
  );
}
