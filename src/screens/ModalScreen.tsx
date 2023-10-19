import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const ModalScreen = () => {
    const [isVisble, setIsVisble] = useState(false)// estado para controla el modal 
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title='Modal'/>

        <Button
             title='Abrir Modal'
             onPress={()=>setIsVisble(true)} // controla el modal 
        />

        <Modal
            animationType='slide'// tipo de animacion que presenta el modal
            visible={isVisble}//muestra  el modal 
            transparent={true}// podamos ver el fondo y que no lo caubra todo 
        >
            <View 
            style={{
               flex:1,
               backgroundColor:'rgba(0,0,0,0.3)',
               justifyContent:'center',
               alignItems:'center',
            }}
            >
                <View
                style={{
                    backgroundColor:'white',
                    width:200,
                    height:200,
                    justifyContent:'center',
                    alignItems:'center',
                    shadowOffset:{//manejo de sombras
                        width:0,
                        height:10
                    },
                    shadowOpacity:0.25,//manejo de sombras
                    elevation:19,//manejo de sombra
                    borderRadius:5
                }}
                
                >
                    
                    <Text>Modal</Text>
                    <Text>Cuerpo del modal</Text>
                    <Button
                     title='Cerrar'
                     onPress={()=>setIsVisble(false)}
                    />
                </View>

            </View>

        </Modal>



    </View>
  )
}
