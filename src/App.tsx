import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from "./routes/routes";
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
          hidden={false}
        />
      <Routes/>
    </NavigationContainer>
  );
}
