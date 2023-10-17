import React, { useState } from 'react'
import { View,Text, Switch, Platform } from 'react-native'

export const SwitchScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);//LEE EL ESTADO POSTERIOR AL INTERRUPTOR Y LO CAMBIA 
  return (
    <View style={{marginTop:100}}>
           <Switch
            trackColor={{false: '#D9D9DB', true: '#5856D6'}}//VALOR POR DEFECTO PARA EL INTERRUPTOR
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
           //thumbColor={(Platform.OS=='android')?'#5856D6':''}//  definimos  colorel del tumb si se llega a presentar problemas en tre sistemas 
           ios_backgroundColor="#3e3e3e"// COLORES PARAIOS
            onValueChange={toggleSwitch}//LEE EL VALOR ACTUALE DEL INTERRUPTOR
            value={isEnabled}// DEFINE EL ESTADO INICIAL DEL INTERRUOTOR
        />
    </View>
  )
}
