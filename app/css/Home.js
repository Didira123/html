import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;
const marginHorizontal = 20;
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
        // width:"100%",
        // textAlign:"center",
        color:"white",
        // fontWeight:"bold",
        fontSize:29.8,
        top:32,
    },
    cestaVarredura:{
        width:"100%",
        textAlign:"left",
        fontWeight:"bold",
        fontSize:22,
        marginBottom:3,
    },
    main:{
        marginHorizontal:marginHorizontal,
    },
    logo_texto:{
        width: (width-(2*marginHorizontal)),
        marginVertical:4,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
        
    },
    logo_logo_texto:{
        width: 100,
        height: 100,
        
    },
    texto_logo_texto:{
        fontSize:26,
        fontWeight:"900",
        // fontFamily:"MS7Bold",
    },
    textao:{
        fontSize:16,
        // margin:10,
        textAlign:"justify",
        lineHeight:26,
        // color:"lightgray",
    },
    valor:{
        // marginLeft:10,
        fontSize:25,
        color:"#228622",
        fontWeight:"900",
        // fontFamily:"MS7Bold",
    },
    imagem_topo:{
        width: "100%",
        height:3/4*width,
    },
    container_titulo:{
        position:"absolute",
        width:165,
        padding:2,
        margin:180
    },
    titulo_imagem:{
        color:"white",
        fontSize:40,
        // width:"43%",
        backgroundColor:"#DF006F",
        borderRadius:19,
        padding:2,
    },
    container_texto_imagem:{
        margin:5,
        padding:10,
        borderWidth:4,
        borderColor: "#FBEDB9",
        borderRadius: 30,
        // shadowOffset:{width: 5, height:5},
        // shadowColor:"red",
        backgroundColor:"#EADDCA",
    },
    texto_imagem:{
        fontSize:11,
        textAlign:"justify",
        // fontStyle:"italic",
    },
    destaqueDiferencial:{
        marginTop:10, 
        position:"absolute", 
        left:9.2, 
        top: 78.7, 
        fontSize: 11.4,
        fontWeight:"bold",
    },
    brown:{
        fontStyle: "italic",
        backgroundColor:"#B7AA87",
    },
    italicWhite:{
        fontStyle:"italic",
        color:"white",
        fontWeight:"bold",
        fontFamily:"MS4Regular",
    },
    imagem_container:{
        width:296*1.08,
        height:327*1.06,
        padding:10,
        backgroundColor:"brown",
    },
    imagem_container2:{
        width:296*1.08,
        height:327*1.06,
        padding:10,
        backgroundColor:"brown",
    },
    imagemTOP2:{
        width: 300,
        height: 300,
    },
    botao_comprar:{
        backgroundColor:"#0CA0A0",
        alignItems: 'center',
        padding:12,
        borderRadius:8,
        marginTop:20,
    },
    texto_botao:{
        color:"white",
        fontSize:16,
    },
    titulo_list_cesta:{
        fontSize:23,
        textAlign:"left",
        fontWeight:"bold",
        marginVertical:20,
    },
    list_cesta:{
        flexDirection:"column",
        alignItems:"flex-start"
    },
    item_cesta:{
        justifyContent:"flex-start",
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"
    },
    item_cesta_imagem:{
        width:40,
        height:40
    },
    item_cesta_texto:{
        marginLeft:10,
        fontSize:18,
    },
    tag_br:{
        borderBottomColor:"gray",
        borderBottomWidth:1,
        // width:"100%",
        width:330,
        marginVertical:16,
        position:"relative",
        width:(width-(2*marginHorizontal)),
    }

})