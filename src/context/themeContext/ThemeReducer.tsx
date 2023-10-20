import { Theme } from '@react-navigation/native';
import React from 'react'

type ThemeAction=
 |{type:'set_light_theme'}
 |{type:'set_dark_theme'};


export interface ThemeState extends Theme{//estendemos de la propiedad theme
    currentTheme:'light'|'dark',
    dividerColor:string,


}

export const  lightThem:ThemeState={
    currentTheme:'light',
    dark:false,
    colors:{
        primary: '#084F6A',
        background: 'white',
        card: 'white',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
    dividerColor:'rgba(0,0,0,0.7)'
}
export const  DarkTheme:ThemeState={
    currentTheme:'dark',
    dark:true,
    colors:{
        primary: '#75CEDB',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor:'rgba(0,0,0,0.7)'
}


export const ThemeReducer = (state:ThemeState,action:ThemeAction):ThemeState => {

    switch (action.type) {
        case 'set_light_theme':
            
        return {
            ...lightThem
        }
  
    
        case 'set_dark_theme':
            
            return{
                ...DarkTheme
            } ;
    
        default:
             return state;
    }
   
}
