import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface props{
    title:string,
}

export const HeaderTitle = ({title}:props) => {
    const {top}=useSafeAreaInsets();
    return (
    <View style={{marginTop:top+20,marginBottom:20}}>
        <Text style={styles.title}>
            {title}
        </Text>
   </View>
  )
}