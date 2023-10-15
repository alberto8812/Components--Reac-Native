import React, { useRef, useState } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'


export const Animation101Screen = () => {

const opacity = useRef(new Animated.Value(0.4)).current;// value maneja un solo valor , x y y  manejar dos valores 
 
const fadeIn=()=>{
  Animated.timing(
    opacity,
    {
      toValue:1,//valor a que necesito que llegue el valor
      duration:300,//duraacion
      useNativeDriver:true,// animacion acelerada por hardware
    }

  ).start();// realiza una animacion acorde aun tiempo debe ser de animated value
}

const fadeOut=()=>{
  Animated.timing(
    opacity,
    {
      toValue:0.4,
      duration:300,
      useNativeDriver:true
    }
  ).start();
}

return (
    <View style={styles.container}>
        <Animated.View style={{...styles.purpleBox,opacity:opacity,marginBottom:20}}/>
       <View
       style={{}}
       >
        <Button 
        title='Fade IN'
        onPress={fadeIn}        
        />
        <Button 
        title='Fade out'
        onPress={fadeOut}        
        />
       </View>
    </View>
  )
}

const styles=StyleSheet.create({

    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    purpleBox:{
        backgroundColor:"#5856D6",
        width:150,
        height:150
    }
});
