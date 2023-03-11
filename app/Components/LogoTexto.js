import React from "react";
import { View, Image, Text} from "react-native";
import {textos, imagens, css} from "../Components/Mock"

export default LogoTexto = () => {

    return (
        <View style={css.home.logo_texto}>
            <Image style={css.home.logo_logo_texto} source={imagens.logo_png}/>
            <Text style={css.home.texto_logo_texto}>{textos.texto_logo}</Text>
        </View>
    )
}