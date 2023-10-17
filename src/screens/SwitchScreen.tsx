import React, { useState } from 'react'
import { View,Text, Switch, Platform, StyleSheet } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';


export const SwitchScreen = () => {
 const [state, setState] = useState({
    isActive:true,
    isHungry:false,
    isHappy:true,
 });
  

 const onChangue=(value:Boolean,field:string)=>{
    setState({
        ...state,
        [field]:value
    })
 }
  
  return (
    <View style={{marginHorizontal:20}}>
        <HeaderTitle title='Switches'/>

        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isActive</Text>
            <CustomSwitch isOn={true} onChangue={(value)=>onChangue(value,'isActive')} />
        </View>
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isHungry</Text>
            <CustomSwitch isOn={false} onChangue={(value)=>onChangue(value,'isHungry')} />
        </View>
        <View style={styles.switchRow}>
            <Text style={styles.switchText}>isHappy</Text>
            <CustomSwitch isOn={true} onChangue={(value)=>onChangue(value,'isHappy')} />
        </View>

         <Text style={styles.switchText}>
            {JSON.stringify(state,null,5)}
         </Text>
    </View>
  )
}

const styles=StyleSheet.create({
  switchText:{
    fontSize:25,
  },
  switchRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:10
  }
})
