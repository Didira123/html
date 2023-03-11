import imagem_topo from "../assets/images/Secagem.jpg";
import Home from "../css/Home";
import LogoTexto from "./LogoTexto";
import topo from "./assets/topo.png";
import logo from "../assets/logo.png";

export {
    imagens, textos, css, htmls
}

const imagens = {
    topo_png: topo,
    logo_png: logo,

}

const textos = {
    h1:"Detalhes da Cesta.",
    h2:"Fazenda Vale do Capão.",
    texto_logo:"Cesta de Varreduras.",
    texto_principal:"Both Android and i0S and most desktop operating systems come with their own set of app, a well-picked font can go a long way. As each operating system has its own set of platform fonts, if you want to produce an experience own set of that is consistent for all users, you wil wantto use your fonts in your project.",
    valor:"R$40,00",
    botao:"Comprar",
}

const htmls = {
    logo_texto: <LogoTexto/>,

}

const css = {
    home: Home,

}