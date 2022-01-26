/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screens/homeScreen'
import ProductScreen from './src/screens/productSreen'


const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{
            title: 'Mercado Libre',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name='Product'
          component={ProductScreen}
          options={{
            title: 'Mercado Libre',
            headerStyle: {
              backgroundColor: 'yellow',
            },
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>    
  );
};



export default App;
