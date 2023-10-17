import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { ScrollView, Switch } from 'react-native-gesture-handler'
import { useFormText } from '../hooks/useFormText'



interface form{
    name:string,
    email:string,
    phone:string,
    isSubcreibe:boolean
}

const initialVlue:form={
    name:'',
    email:'',
    phone:'',
    isSubcreibe:false,
}


export const TextInputScreen = () => {

const {form,onChange,name,email,phone}=useFormText(initialVlue);

  return (
    <KeyboardAvoidingView>
      <ScrollView>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.globalMargin}>
                <HeaderTitle title='TextInput'/>

                <TextInput 
                    style={stylesScreen.TextInpuStyle}
                    placeholder='ingrese number'
                    autoCorrect={false}// para que no realice correcciones 
                    value={form.name}
                    autoCapitalize='words'// capitalizar palabras
                    onChangeText={(value)=>onChange(value,'name')}
                />
                <TextInput 
                    style={stylesScreen.TextInpuStyle}
                    autoCorrect={false}// para que no realice correcciones 
                    placeholder='ingrese su email'
                    autoCapitalize='none'// not capitalizar palabras
                    value={form.email}
                    onChangeText={(value)=>onChange(value,'email')}
                    keyboardType='email-address'//definimos las caracteristicas que traiga el teclado ejemplo @
                />
                <TextInput 
                    style={stylesScreen.TextInpuStyle}
                    autoCorrect={false}// para que no realice correcciones 
                    placeholder='ingrese su telefono'
                    autoCapitalize='none'// capitalizar palabras
                    value={form.phone}
                    onChangeText={(value)=>onChange(value,'phone')}
                    keyboardType='phone-pad'
                />

                <Switch
                   trackColor={{false:'#D9D9DB',true:'#5856D6'}}
                   onValueChange={(value)=>onChange(value,'isSubcreibe')}
                   value={form.isSubcreibe}
             
               />

                <HeaderTitle title={JSON.stringify(form,null,3)}/>


             
            </View>
      </TouchableWithoutFeedback>
        </ScrollView>   
    </KeyboardAvoidingView>
  )
}

const stylesScreen=StyleSheet.create({
    TextInpuStyle:{
        borderWidth:1,
        height:50,
        paddingHorizontal:10,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.3)',
        marginVertical:5
    }
});
