import React from 'react';
import { View, StyleSheet, StatusBar, Text, Image } from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';
import Home from './css/Home';
import topo from "./assets/topo.png";
import LogoTexto from "./Components/LogoTexto";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

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


// export default class App extends React.Component {

//   const [fontsLoaded] = useFonts({
//     Inter_900Black,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   render(){
//     return (
//       <View style={Home.container}>
//         <StatusBar/>

//         <Image style={Home.topo} source={topo}/>
//         <Text style={Home.texto_topo}>Detalhes da Cesta:</Text>
//         <Text style={Home.cestaVarredura}>Cesta de Varreduras</Text>
//         <LogoTexto/>
//         <Text style={Home.textao}>Um Kit com produtos fresquinhos e selecionados, diretamente da fazenda para a sua mesa. Ao escolher um dos nossos produtos você leva o melhor em verduras, frutas e legumes para a sua família. São produtos saudáveis, livres de agrotóxicos.</Text>
//         <Text style={Home.valor}>R$40,00</Text>
//       </View>
//     )
//   }
// }

export default function App () {

  const [fontsLoaded] = useFonts({
    "MS4Regular":Montserrat_400Regular,
    "MS7Bold": Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <View/>;
  }
  return (
    <View style={Home.container}>
      <StatusBar/>
      <Image style={Home.topo} source={topo}/>
      <Text style={Home.texto_topo}>Detalhes da Cesta:</Text>
      <Text style={Home.cestaVarredura}>Cesta de Varreduras</Text>
      <LogoTexto/>
      <Text style={Home.textao}>Um Kit com produtos fresquinhos e selecionados, diretamente da fazenda para a sua mesa. Ao escolher um dos nossos produtos você leva o melhor em verduras, frutas e legumes para a sua família. São produtos saudáveis, livres de agrotóxicos.</Text>
      <Text style={Home.valor}>R$40,00</Text>
    </View>
  )
}
