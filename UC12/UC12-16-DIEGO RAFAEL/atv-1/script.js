// var botoes = document.querySelectorAll(".botao");
// for(let cont = 0; cont<4; cont++){
//     botoes[cont].addEventListener("click", mudarCor(botoes[cont].textContent));
// }
function mudarCor(cor){
    switch(cor){
        case "Vermelho":
            removeAllClasses();
            document.body.classList.add("vermelho");
            break;
        case "Verde":
            removeAllClasses();
            document.body.classList.add("verde");
            break;
        case "Azul":
            removeAllClasses();
            document.body.classList.add("azul");
            break;
        case "Amarelo":
            removeAllClasses();
            document.body.classList.add("amarelo");
            break;
        default:
            window.alert("ERROR: click resulted in an unexpected action.")
    }
}

function removeAllClasses(){
    document.body.classList.remove("vermelho");
    document.body.classList.remove("verde");
    document.body.classList.remove("azul");
    document.body.classList.remove("amarelo");
}