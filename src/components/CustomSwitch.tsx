import React, { useContext, useState } from 'react'
import { Platform, Switch, View } from 'react-native'
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface props{
    isOn:boolean,
    onChangue:(value:Boolean)=>void,
}

export const CustomSwitch = ({isOn,onChangue}:props) => {

  const {theme:{colors}}=useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(isOn)  
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChangue(!isEnabled);
    };//LEE EL ESTADO POSTERIOR AL INTERRUPTOR Y LO CAMBIA 
  
  
  return (
    <View>
         <Switch
            trackColor={{false: colors.primary, true: colors.text}}//VALOR POR DEFECTO PARA EL INTERRUPTOR
           // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
           thumbColor={(Platform.OS=='android')?colors.border:''}//  definimos  colorel del tumb si se llega a presentar problemas en tre sistemas 
            ios_backgroundColor="#3e3e3e"// COLORES PARAIOS
            onValueChange={toggleSwitch}//LEE EL VALOR ACTUALE DEL INTERRUPTOR
            value={isEnabled}// DEFINE EL ESTADO INICIAL DEL INTERRUOTOR
        />
    </View>
  )
}
