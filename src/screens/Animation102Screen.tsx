import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Animation102Screen = () => {
  return (
    <View style={{flex:1}}>
        <View style={styles.purpleBox}/>
    </View>
  )
}

const styles=StyleSheet.create({
    purpleBox:{
        backgroundColor:"#5856f4",
        width:150,
        height:150
    }
});
