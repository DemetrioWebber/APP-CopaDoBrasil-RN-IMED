import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/views/Home'
import Jogos from './src/views/Jogos'
import Fases from './src/views/Fases'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Campeonatos do Brasil',
            headerTitleAlign: "center"

          }}
        />
        <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: 'Tela de Fases',
            headerTitleAlign: "center"

          }}
        />
        <Stack.Screen
          name="Jogos"
          component={Jogos}
          options={{
            title: 'Tela de Jogos',
            headerTitleAlign: "center"

          }}
        />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}