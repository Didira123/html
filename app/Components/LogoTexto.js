import React from "react";
import { View, Image, Text } from "react-native";
import logo from "../assets/logo.png";
import Home from '../css/Home';

export default LogoTexto = () => {

    return (
        <View style={Home.logo_texto}>
            <Image style={Home.logo_logo_texto} source={logo}/>
            <Text style={Home.texto_logo_texto}>   Fazenda Vale do Capão</Text>
        </View>
    )
}