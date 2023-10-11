import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/home/index'
import CadastroObra from '../pages/cadastroobra/index'
import Usuario from '../pages/login/index'

const Stack = createStackNavigator();

const Routes: React.FC = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >

        <Stack.Screen
            name='Usuario'
            component={Usuario}
        />

        <Stack.Screen
            name='Home'
            component={Home}
        />

        <Stack.Screen
            name='CadastroObra'
            component={CadastroObra}
        />
    </Stack.Navigator>
)

export default Routes;