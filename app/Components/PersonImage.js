import React from "react";
import { Image, View } from "react-native";
import imagemTOP from "../assets/images/coador1.png";
import imagemTOP2 from "../assets/images/hario.jpg";
import Home from "../css/Home";

export default ({style}) => {
    return (
        <View>
            <View style={style}>
                <Image source={imagemTOP}/>
            </View>
            <View style={[style, Home.brown]}>
                <Image style={Home.imagemTOP2} source={imagemTOP2}/>
            </View>
        </View>
    );
}