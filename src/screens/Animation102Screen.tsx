import React, { useRef } from 'react'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY).current;

  const panResponder=PanResponder.create({
    onStartShouldSetPanResponder:() =>true,
    onPanResponderMove:Animated.event([
      null,
      {
        dx:pan.x,
        dy:pan.y
      },
    ],{
      useNativeDriver:false
    }),
    onPanResponderRelease:()=>{
      Animated.spring(
        pan,
        {toValue:{x:0,y:0},useNativeDriver:false}
      ).start();
    }
  });


  return (
    <View style={styles.contaner}>
        <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(),styles.purpleBox]}/>
    </View>
  )
}

const styles=StyleSheet.create({
    contaner:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    purpleBox:{
        backgroundColor:"#5856f4",
        width:150,
        height:150
    }
});
