import React from 'react'
import { FlatList } from 'react-native';
import { Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

interface MenuItem{
    name:string,
    icon:string,
    components:string,
}


const menuItem=[
    {
        name:'Animation 101',
        icon:'cube-outline',
        components:'Animation101Screen'
    }
]

export const HomeScreen = () => {
  
    const renderMeniItem=(menuItem:MenuItem)=>{
        return(
            <View>
                <Text>{menuItem.name}-{menuItem.icon}</Text>
            </View>
        )
    }

    return (
    <View style={{flex:1}}>
        <FlatList
            data={menuItem}
            renderItem={({item})=>renderMeniItem(item)}
            keyExtractor={(item)=>item.name}
        />
    </View>
  )
}
