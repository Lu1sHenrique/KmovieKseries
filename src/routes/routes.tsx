import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack'

import Home from '../pages/home/index'

const Stack = createStackNavigator ();

const Routes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen
            name='Home'
            component={Home}
        />
    </Stack.Navigator>
)

export default Routes;