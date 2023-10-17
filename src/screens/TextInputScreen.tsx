import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from '../components/HeaderTitle'
import { ScrollView } from 'react-native-gesture-handler'



interface form{
    name:string,
    email:string,
    phone:string
}


export const TextInputScreen = () => {

    const [form, setForm] = useState<form>({
        name:'',
        email:'',
        phone:'',
    });
    const TextOnchange=(value:string,field:string)=>{

        setForm({
            ...form,
           [field]:value
        })

    }

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
                    onChangeText={(value)=>TextOnchange(value,'name')}
                />
                <TextInput 
                    style={stylesScreen.TextInpuStyle}
                    autoCorrect={false}// para que no realice correcciones 
                    placeholder='ingrese su email'
                    autoCapitalize='none'// not capitalizar palabras
                    value={form.email}
                    onChangeText={(value)=>TextOnchange(value,'email')}
                    keyboardType='email-address'//definimos las caracteristicas que traiga el teclado ejemplo @
                />
                <TextInput 
                    style={stylesScreen.TextInpuStyle}
                    autoCorrect={false}// para que no realice correcciones 
                    placeholder='ingrese su telefono'
                    autoCapitalize='none'// capitalizar palabras
                    value={form.phone}
                    onChangeText={(value)=>TextOnchange(value,'phone')}
                    keyboardType='phone-pad'
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
