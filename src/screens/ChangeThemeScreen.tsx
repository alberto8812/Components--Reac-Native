import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'


export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Change Theme'/>
        <TouchableOpacity
            style={{
                backgroundColor:'#5856d6',
                justifyContent:'center',
                width:150,
                height:50,
                borderRadius:20,

            }}
            activeOpacity={0.8}
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

