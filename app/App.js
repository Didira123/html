import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image, SafeAreaView } from 'react-native';
import AppLoading from 'expo-app-loading';
import Header from './Components/Header';
import Body from './Components/Body';
import Home from './css/Home';
import topo from "./assets/topo.png";

import LogoTexto from "./Components/LogoTexto";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import imagem_topo from "./assets/images/Secagem.jpg";
import imagem_fim from "./assets/images/CARROSSEL1.png";

export default function App () {

  const [fontsLoaded] = useFonts({
    "MS4Regular":Montserrat_400Regular,
    "MS7Bold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
    <SafeAreaView style={Home.view}>
      <StatusBar/>
      <Image style={Home.imagem_topo} source={imagem_topo}/>
      <View style={Home.container_titulo}>
        <Text style={Home.titulo_imagem}>História:</Text>
      </View>
      <View style={Home.container_texto_imagem}>
      <Text style={Home.texto_imagem}>O Sítio Terra Boa, localizado em Caratinga - MG, é uma propriedade adquirida em 1999 por um casal de professores residentes em Ipatinga. A família foi investindo no sítio e tocando as lavouras à distância, em parcerias agrícolas. A família passava as férias com os filhos na roça, e ali, eles brincavam e corriam livremente.</Text>
      
      <Text style={[Home.texto_imagem, {marginTop:10}]}>
        <Text style={[Home.texto_imagem, Home.destaqueDiferencial]}>Diferencial da fazenda:</Text>  A gestão do Sítio Terra Boa preza pelas práticas sustentáveis e manejo preferencialmente agroecológico. Desenvolve sistema de consórcio com feijão para subsistência e implantou sistema de consórcio do café com abacate e palmito pupunha, ambos ainda em formação, no sistema de agroflorestal. As bananeiras circulam as lavouras, funcionando como quebra vento, assim como outras espécies frutíferas, além de ipê amarelo, rosa, mogno, cedro, araucária, dentre outras Particularidades da fazenda:Agricultura familiar, produção artesanal, microclima e geomorfologia favoráveis aos cafés de qualidade superior e ótima incidência de raios solares em todos os talhões.</Text>
      </View>
      <View style={[Home.container_texto_imagem, Home.brown]}>
        <Text style={[Home.texto_imagem, Home.italicWhite]}>Um Kit com produtos fresquinhos e selecionados, diretamente da fazenda para a sua mesa. Ao escolher um dos nossos produtos você leva o melhor em verduras, frutas e legumes para a sua família. São produtos saudáveis, livres de agrotóxicos.</Text>
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
//     return <View/>;
//   }
//   return (
//     <SafeAreaView style={Home.container}>
//       <StatusBar/>
//       <Image style={Home.topo} source={topo}/>
//       <Text style={Home.texto_topo}>Detalhes da Cesta:</Text>
//       <Text style={Home.cestaVarredura}>Cesta de Varreduras</Text>
//       <LogoTexto/>
//       <Text style={Home.textao}>Um Kit com produtos fresquinhos e selecionados, diretamente da fazenda para a sua mesa. Ao escolher um dos nossos produtos você leva o melhor em verduras, frutas e legumes para a sua família. São produtos saudáveis, livres de agrotóxicos.</Text>
//       <Text style={Home.valor}>R$40,00</Text>
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