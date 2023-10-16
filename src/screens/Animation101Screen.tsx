import React, { useRef, useState } from 'react'
import { Animated, Button, Easing, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'


export const Animation101Screen = () => {
  const {opacity,position,fadeIn,fadeOut,startMovie}=useAnimation();


return (
    <View style={styles.container}>
        <Animated.View style={
          {
            ...styles.purpleBox,
            opacity,
            marginBottom:20,
            transform:[{//objeto de cordenada para tranaladar en los ejes un objeto
              translateY:position
            }]
          }}
            />
       <View
       style={{}}
       >
        <Button 
        title='Fade IN'
        onPress={()=>{
          fadeIn();
          startMovie(-120);
        }}        
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
