import React,{ createContext, useEffect, useReducer } from "react";
import { DarkTheme, ThemeReducer, ThemeState, lightThem } from "./ThemeReducer";
import { AppState, useColorScheme } from "react-native";
import { useFocusEffect } from "@react-navigation/native";



interface ThemeContextProps {
    theme: ThemeState; 
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext=createContext({} as ThemeContextProps);//REQUIERE SABER COMO LUCE LA INFORMACION 

export const ThemeProvider=({children}:any)=>{
    /**
     * se crear el proveedor del contexto que es un HOC 
     */

    const colorScheme=useColorScheme();//trabaja con las propiedades  de dark y light
  
    const [theme, dispatch] = useReducer(ThemeReducer,(colorScheme==='dark')?DarkTheme:lightThem)


    // useEffect(() => {
    //  AppState.addEventListener('change',(status)=>{
    //     if(status==='active'){
    //         (  colorScheme==='light')?setLightTheme():setDarkTheme();
    //     }
    //  })//me dice como se encuentra el estado de aplicacion
    // }, [])
    
    useEffect(() => {
      (  colorScheme==='light')?setLightTheme():setDarkTheme();
    }, [colorScheme])
    

    const setDarkTheme=()=>{
        dispatch({type:'set_dark_theme'});
        console.log("Dark")
    };
    const setLightTheme=()=>{
        dispatch({type:'set_light_theme'});
        console.log("ligth")
    };


    return(
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            { children }
        </ThemeContext.Provider>
    )
}