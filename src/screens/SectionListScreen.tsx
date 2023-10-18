import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { Separator } from '../components/Separator';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", ]
    }
];



export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin,flex:1}}>
        <SectionList
            ListHeaderComponent={()=> <HeaderTitle title='SECTION liST'/>}// manejar los heder en la pagian 
            sections={casas}//carga toda la informacion
            keyExtractor={(item,index)=>item+index}//define la clave
            renderItem={({item})=><Text>{item}</Text>}//funciotn igual al flat  con el parametro item
            renderSectionHeader={({section})=> <HeaderTitle title={section.casa}/>}//define los encabezado de la list
            stickySectionHeadersEnabled//animacion para el movimiento 
            ListFooterComponent={()=><HeaderTitle title='total de casas 3'/>}
            renderSectionFooter={({section})=><HeaderTitle title={'total'+section.data.length}/>}
            SectionSeparatorComponent={()=><Separator/>}
        />
    </View>
  )
}
