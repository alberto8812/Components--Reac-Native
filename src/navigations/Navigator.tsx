import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
  
const stack=createStackNavigator ();

export const Navigator = () => {
  return (
    <stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
        <stack.Screen name='HomeScreen' component={HomeScreen}/>
    </stack.Navigator>
  )
}
