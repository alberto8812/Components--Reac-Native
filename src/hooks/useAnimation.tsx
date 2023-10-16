import { useRef } from "react";
import { Animated, Easing } from "react-native";


export const useAnimation = () => {


    const opacity = useRef(new Animated.Value(0)).current;// value maneja un solo valor , x y y  manejar dos valores 
    const position = useRef(new Animated.Value(0)).current;// realiza el efecto de cada objeto
     
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
    

    const startMovie=(initPosition:number=-100,duration:number=300)=>{
        
        position.setValue(initPosition);
        Animated.timing(
            position,
            {
            toValue:0,
            duration,
            useNativeDriver:true,
            easing:Easing.bounce
            }
        ).start()
    }

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    startMovie
  }
}
