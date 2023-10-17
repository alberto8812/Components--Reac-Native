import React, { useState } from 'react'
import { Platform, Switch, View } from 'react-native'


interface props{
    isOn:boolean,
    onChangue:(value:Boolean)=>void,
}

export const CustomSwitch = ({isOn,onChangue}:props) => {
  const [isEnabled, setIsEnabled] = useState(isOn)  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChangue(!isEnabled);
    };//LEE EL ESTADO POSTERIOR AL INTERRUPTOR Y LO CAMBIA 
  
  
  return (
    <View>
         <Switch
            trackColor={{false: '#D9D9DB', true: '#5856D6'}}//VALOR POR DEFECTO PARA EL INTERRUPTOR
           // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
           thumbColor={(Platform.OS=='android')?'#5856D6':''}//  definimos  colorel del tumb si se llega a presentar problemas en tre sistemas 
            ios_backgroundColor="#3e3e3e"// COLORES PARAIOS
            onValueChange={toggleSwitch}//LEE EL VALOR ACTUALE DEL INTERRUPTOR
            value={isEnabled}// DEFINE EL ESTADO INICIAL DEL INTERRUOTOR
        />
    </View>
  )
}
