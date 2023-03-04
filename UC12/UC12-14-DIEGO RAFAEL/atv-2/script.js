var valores = window.prompt("Diga os valores para ser calculada a média (separe os valores com um espaço): ").split(" ");
imprimir(calcMedia(valores));

function calcMedia(array){
    var total = 0;
    var cont = 0;
    for (;cont < array.length;cont++){
        total+=parseFloat(array[cont]);
    }
    return total/cont;
}
function imprimir(valor){
    window.alert(valor);
}