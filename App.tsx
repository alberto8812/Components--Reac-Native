
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer,DefaultTheme,DarkTheme, Theme   } from '@react-navigation/native';
import { Navigator } from './src/navigations/Navigator';
import { Text,View } from 'react-native';


const CustomThem:Theme={
  dark:true,
  colors:{
    ...DefaultTheme.colors,
   // background:'gray',
  }
}



 const App = () => {
  return (
    // <View>
    //   <Text>CARLOS</Text>
    // </View>
     <NavigationContainer theme={CustomThem}>
       <Navigator/>
     </NavigationContainer>
  )
}

export default App;
