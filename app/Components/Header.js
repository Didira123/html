import React from "react";
import { View, Image } from "react-native";
import coffee from "../assets/coffee.png";

export default Header = () => {
    return(
        <View>
            <Image source={coffee}/>
        </View>
    );
}