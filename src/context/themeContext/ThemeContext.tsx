import React,{ createContext, useReducer } from "react";
import { ThemeReducer, ThemeState, lightThem } from "./ThemeReducer";



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
  
    const [theme, dispatch] = useReducer(ThemeReducer,lightThem)

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