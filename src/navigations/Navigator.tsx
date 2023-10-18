import React from 'react'
import { createStackNavigator  } from '@react-navigation/stack';
import { AlertScreen, Animation101Screen, Animation102Screen, HomeScreen, ModalScreen, PullTorefreshScreen, SectionListScreen, SwitchScreen, TextInputScreen } from '../screens';


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
        <stack.Screen name='SwitchScreen' component={SwitchScreen}/>
        <stack.Screen name='AlertScreen' component={AlertScreen}/>
        <stack.Screen name='TextInputScreen' component={TextInputScreen}/>
        <stack.Screen name='PullTorefreshScreen' component={PullTorefreshScreen}/>
        <stack.Screen name='SectionListScreen' component={SectionListScreen}/>
        <stack.Screen name='ModalScreen' component={ModalScreen}/>
    </stack.Navigator>
  )
}
