
import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigations/Navigator';
import { Text,View } from 'react-native';




 const App = () => {
  return (
    // <View>
    //   <Text>CARLOS</Text>
    // </View>
     <NavigationContainer>
       <Navigator/>
     </NavigationContainer>
  )
}

export default App;
