import React, { useContext } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'


export const ChangeThemeScreen = () => {

    const {setDarkTheme,setLightTheme,theme:{colors,currentTheme}}=useContext(ThemeContext);
    
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Change Theme'/>
        <TouchableOpacity
            style={{
                backgroundColor:colors.primary,
                justifyContent:'center',
                width:150,
                height:50,
                borderRadius:20,

            }}
            activeOpacity={0.8}
            onPress={(currentTheme=='light')?setDarkTheme:setLightTheme}
        >
            <Text 
                style={{color:'white',textAlign:'center',fontSize:15}}
            >
            ChangeThemeScreen
            </Text>
        </TouchableOpacity>
    </View>
  )
}

