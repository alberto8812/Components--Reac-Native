import React, { useState } from 'react'
import { useAnimation } from '../hooks/useAnimation';
import { ActivityIndicator, Animated, StyleProp, View, ViewStyle } from 'react-native';

interface Props{
    uri:string,
    style?: StyleProp<ViewStyle>
}



export const FadeInImage = ({uri,style}:Props) => {
    const {opacity,fadeIn}=useAnimation();
    const [isLoade, setIsLoade] = useState(true);

    const finisLoading=()=>{
        setIsLoade(false);
        fadeIn()
    }
  return (
    <View
        style={{
            justifyContent:'center',
            alignItems:'center'
        }}
    >
        {
            isLoade && <ActivityIndicator size={30} color='#5856d6' style={{position:'absolute'}}/>
        }
        <Animated.Image
            source={{uri}}
            style={{
                ...style,
                opacity
            }}
            onLoadEnd={finisLoading}//cuando se termino de cargar la imagen
        
        />
    </View>
  )
}
