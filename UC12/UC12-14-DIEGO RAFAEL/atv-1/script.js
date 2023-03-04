
var valores = window.prompt("Diga 2 valores a serem somados: ").split(" ");

imprimir(somar(valores[0], valores[1]));

function somar(a, b){
    return parseFloat(a)+parseFloat(b);
}

function imprimir(valor){
    window.alert(valor);
}