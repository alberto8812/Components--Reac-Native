import React, { useContext } from 'react'
import { MenuItem } from '../interface/appInterfaces';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';



interface Props{
    menuItem:MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {

    const navigation=useNavigation()
    const {theme:{colors}}=useContext(ThemeContext);

  return (
    <TouchableOpacity
     activeOpacity={0.8}
     onPress={()=>navigation.navigate(menuItem.component as any)}//TODO:Aqui
    >
        <View style={styles.container}>
            <Icon 
                name={menuItem.icon}
                color={colors.primary}
                size={23}
                />
            <Text style={{...styles.itemText,color:colors.text}}>{menuItem.name}</Text>

            <View style={styles.arrowContanines}>
            <Icon 
                name="chevron-forward-outline"
                color={colors.card}
                size={23}
                
                />
            </View>
        </View>
     </TouchableOpacity>

  )
}


const styles=StyleSheet.create({

    container:{
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
        fontSize:19
    },
    arrowContanines:{
        flexDirection:'row',
        flex:1,
        justifyContent:'flex-end'
    }



});
