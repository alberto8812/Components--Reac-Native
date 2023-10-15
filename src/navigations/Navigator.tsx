import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import { Animation101Screen, Animation102Screen, HomeScreen } from '../screens';

const stack=createStackNavigator ();

export const Navigator = () => {
  return (
    <stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
        <stack.Screen name='HomeScreen' component={HomeScreen}/>
        <stack.Screen name='Animation101Screen' component={Animation101Screen}/>
        <stack.Screen name='Animation102Screen' component={Animation102Screen}/>
    </stack.Navigator>
  )
}
