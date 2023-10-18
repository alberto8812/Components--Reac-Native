import React, { useState } from 'react'
import { Text, View,ScrollView,RefreshControl } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'


export const PullTorefreshScreen = () => {

  const [refreshing, setRefreshing] = useState(false)// indica el refresh control cuando se esta haceindo la peticion
  
  const Onrefresh=()=>{
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminadomo')
      setRefreshing(false);
    }, 1500);
  }
  
  return (
    <ScrollView
    refreshControl={
        <RefreshControl
            refreshing={refreshing}//indica si hay que refrescar datos
            onRefresh={Onrefresh}//metodo para que empiece a cargar datos
            progressViewOffset={10}// genera un offseet en la parte superior solo para android
            progressBackgroundColor="#5856d6"// cambio de color de loader solo android 
            colors={['white','red','orange']}// arreglo de colores para el loader 
            style={{backgroundColor:'#5856d6'}}
            tintColor='Wwhite'
        />
    }//opcion 
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title='Pull to Refresh'/>
      <Text>
          PullTorefreshScreen
      </Text>    
      </View>
    </ScrollView>  
  )
}
