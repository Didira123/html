import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default Home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header:{

    },
    body:{

    },
    topo:{
        width:"100%",
        height: 578/768 * (Dimensions.get('screen').width),
    },
    texto_topo:{
        position:"absolute",
        width:"100%",
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:25,
    },
    cestaVarredura:{
        width:"100%",
        textAlign:"left",
        fontWeight:"bold",
        fontSize:25,
        margin:10,
    },
    logo_texto:{
        margin: 10,
        flexDirection: "row",
        alignItems:"center",
        
    },
    logo_logo_texto:{
        width: 40,
        height: 40,
        
    },
    texto_logo_texto:{
        fontSize:18,
        fontFamily:"MS7Bold",
    },
    textao:{
        fontSize:16,
        margin:10,
        textAlign:"justify",
        lineHeight:24,
        color:"lightgray",
    },
    valor:{
        marginLeft:10,
        fontSize:30,
        color:"#3A8",
        fontFamily:"MS7Bold",
    },

})