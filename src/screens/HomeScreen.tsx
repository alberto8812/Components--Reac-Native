import React from 'react'
import { FlatList } from 'react-native';
import { Text, View } from 'react-native'

import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItem } from '../data/menuItems';


export const HomeScreen = () => {
  
const {top}=useSafeAreaInsets()
    
    const rederListHeader=()=>{

        return(
            <View style={{marginTop:top+20,marginBottom:20}}>
                 <Text style={styles.title}>opciones de menu</Text>
            </View>
                 )
    }

    const itemSeparator=()=>{
        return(
            <View
                style={{
                    borderBottomWidth:1,
                    opacity:0.4,
                    marginVertical:8
                }}
            />
        )
    }

    return (
    <View style={{flex:1, ...styles.globalMargin}}>

        
        <FlatList
            data={menuItem}
            renderItem={({item})=><FlatListMenuItem menuItem={item}/>}
            keyExtractor={(item)=>item.name}
            ListHeaderComponent={()=>rederListHeader()}
            ItemSeparatorComponent={()=>itemSeparator()}
        />
    </View>
  )
}
