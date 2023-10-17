import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
  
    const showAlert=()=>{
        Alert.alert('title',"este es el mensaje de la alerta",
        [
            {
                text:'cancel',
                onPress:()=>Alert.alert('cancek Pressed'),
                style:'cancel'
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            {text: 'step', onPress: () => console.log('OK Pressed')},//adaptamos otro boton en los mensajes
        ], 
        {
            cancelable:true // cuando pierde el foco la cierra
        } 
        );

    }

    const showPromt=()=>{
        Alert.prompt(
            'estas seguro?',
            
        )
    }
  
    return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alert'/>
      <Button 
       title='Mostrar Alarts'
       onPress={showAlert}
      />
      <Button 
       title='Mostrar Prompt'
       onPress={showPromt}
      />
    </View>
  )
}
