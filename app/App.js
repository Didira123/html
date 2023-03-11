import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';

import AppLoading from 'expo-app-loading';

import Header from './Components/Header';
import Body from './Components/Body';

import Home from './css/Home';
import imagem_topo from "./assets/images/Secagem.jpg";
import PersonImage from './Components/PersonImage';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import {textos, imagens, htmls, css} from "./Components/Mock";



export default function App () {

  const [fontsLoaded] = useFonts({
    "MS4Regular":Montserrat_400Regular,
    "MS7Bold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View/>;
  }
  return (
    <SafeAreaView style={css.home.container}>
      <StatusBar/>
      <Image style={css.home.topo} source={imagens.topo_png}/>
      <Text style={css.home.texto_topo}>{textos.h1}</Text>
      <View style={css.home.main}>
        {htmls.logo_texto}
        <Text style={css.home.cestaVarredura}>{textos.h2}</Text>
        <Text style={css.home.textao}>{textos.texto_principal}</Text>
        <Text style={css.home.valor}>{textos.valor}</Text>
        <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}><Text>{textos.botao}</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

// export default function App () {

//   const [fontsLoaded] = useFonts({
//     "MS4Regular":Montserrat_400Regular,
//     "MS7Bold": Montserrat_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <AppLoading/>;
//   }
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <StatusBar/>
//         <Image style={Home.imagem_topo} source={Mock}/>
//         <View style={Home.container_titulo}>
//           <Text style={Home.titulo_imagem}>História:</Text>
//         </View>
//         <View style={Home.container_texto_imagem}>
//         <Text style={Home.texto_imagem}>O Sítio Terra Boa, localizado em Caratinga - MG, é uma propriedade adquirida em 1999 por um casal de professores residentes em Ipatinga. A família foi investindo no sítio e tocando as lavouras à distância, em parcerias agrícolas. A família passava as férias com os filhos na roça, e ali, eles brincavam e corriam livremente.</Text>
        
//         <Text style={[Home.texto_imagem, {marginTop:10}]}>
//           <Text style={[Home.texto_imagem, Home.destaqueDiferencial]}>Diferencial da fazenda:</Text>  A gestão do Sítio Terra Boa preza pelas práticas sustentáveis e manejo preferencialmente agroecológico. Desenvolve sistema de consórcio com feijão para subsistência e implantou sistema de consórcio do café com abacate e palmito pupunha, ambos ainda em formação, no sistema de agroflorestal. As bananeiras circulam as lavouras, funcionando como quebra vento, assim como outras espécies frutíferas, além de ipê amarelo, rosa, mogno, cedro, araucária, dentre outras Particularidades da fazenda:Agricultura familiar, produção artesanal, microclima e geomorfologia favoráveis aos cafés de qualidade superior e ótima incidência de raios solares em todos os talhões.</Text>
//         </View>
//         <View style={[Home.container_texto_imagem, Home.brown]}>
//           <Text style={[Home.texto_imagem, Home.italicWhite]}>Um Kit com produtos fresquinhos e selecionados, diretamente da fazenda para a sua mesa. Ao escolher um dos nossos produtos você leva o melhor em verduras, frutas e legumes para a sua família. São produtos saudáveis, livres de agrotóxicos.</Text>
//         </View>
//         <PersonImage style={Home.imagem_container}/>

//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default class App extends React.Component {
//   render(){
//     return (
//       <View style={Home.container}>
//         <StatusBar/>
//         <Header/>
//         <Body/>
//       </View>
//     )
//   }
// }