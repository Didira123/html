var dimensao = parseInt(window.prompt("Diga um número inteiro maior que 0: "));
// var dimensao = 5;
// alert(dimensao);
document.querySelector("body").innerHTML+="<div class=\"mapasXadrez\"></div>";
var espaco = document.querySelector(".mapasXadrez");
for(var cont = 1; cont<=dimensao; cont++){
    espaco.innerHTML+="<div class=\"linhas\"></div>";
    var linha = espaco.querySelectorAll(".linhas")[cont-1];
    
    var quadrados = "";
    for(var cont2 = 1; cont2<=dimensao; cont2++){
        quadrados += "<div class=\"quadrados\"></div>";
    }
    linha.innerHTML=quadrados;
}

document.querySelector("body").innerHTML+= espaco.outerHTML+espaco.outerHTML;

var mapas = document.querySelectorAll(".mapasXadrez");
var espaco = mapas[0];
var tagsQuadrados = espaco.querySelectorAll(".quadrados");
for(var cont = 0; cont<dimensao; cont++){
    
    for(var cont2 = 0; cont2<dimensao; cont2++){
        tagsQuadrados[(cont*dimensao+cont2)].textContent = "OPA";
        if (!(cont2 == 0 || cont2==dimensao-1 || cont == 0 || cont == dimensao-1)){
            tagsQuadrados[(cont*dimensao+cont2)].classList.add("texto-branco");
        }
    }
}

var espaco = mapas[1];
var tagsQuadrados = espaco.querySelectorAll(".quadrados");
for(var cont = 0; cont<dimensao; cont++){
    
    for(var cont2 = 0; cont2<dimensao; cont2++){
        tagsQuadrados[(cont*dimensao+cont2)].textContent = "OPA";
        if (!(cont2 == 0 || cont == dimensao-1 || cont == cont2)){
            tagsQuadrados[(cont*dimensao+cont2)].classList.add("texto-branco");
        }
    }
}

var espaco = mapas[2];
var tagsQuadrados = espaco.querySelectorAll(".quadrados");
for(var cont = 0; cont<dimensao; cont++){
    
    for(var cont2 = 0; cont2<dimensao; cont2++){
        tagsQuadrados[(cont*dimensao+cont2)].textContent = "OPA";
        if ((cont + cont2)%2 == 0){
            tagsQuadrados[(cont*dimensao+cont2)].classList.add("preto");
        } else {
            tagsQuadrados[(cont*dimensao+cont2)].classList.add("texto-branco");
        }
    }
}