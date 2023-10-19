import React, { useState } from 'react'
import { StyleSheet, Text, View,FlatList, Image, ActivityIndicator } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { FadeInImage } from '../components/FadeInImage'


export const InifiniScrollScreen = () => {
    /**
     * establecemos un scroll nolmal
     * 
     */
  const [number, setNumber] = useState([0,1,2,3,4,5]);

  const renderItem=(item:number)=>{
    return(
        <FadeInImage 
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{
            width:'100%',
            height:400
        }}
        
        />
        // <Image
        //     source={{uri:`https://picsum.photos/id/${item}/500/400`}}
        //     style={{
        //         width:"100%",
        //         height:400
        //     }}
        //     key={item}
        // />

    )
  }

 const loadMore=()=>{

    const newArray:number[]=[]
    for (let i = 0; i < 5; i++) {
       newArray[i]=number.length+1;
    }
    setNumber([...number,...newArray])
 }

  return (
    <View style={{flex:1}}>
        <FlatList
         data={number}
         keyExtractor={(item,index)=>item.toString()+index}
         renderItem={({item})=>renderItem(item)}
         ListHeaderComponent={()=>( 
          <View style={{marginHorizontal:20}}>
              <HeaderTitle title='Scroll Infinito'/>
          </View>
         
         )}
         onEndReached={loadMore}// funcion que se dispara cuando se llega al fondo de la lista
         onEndReachedThreshold={0.5}//indica que tancerca estamos del fondo para disparar el onTouchCancel
         ListFooterComponent={()=>(//generar un loader mientras carga las imagenes
            <View
             style={
                {
                    height:150,
                    width:'100%',
                    justifyContent:'center',
                    alignItems:'center'
                }
             }
            > 
                <ActivityIndicator size={20} color="#5856d6"/>
            </View>
         )}
         
        />

    </View>
  )
}

const stylesScroll=StyleSheet.create({
    textItem:{
        backgroundColor:'green',
        height:150
    }
});
