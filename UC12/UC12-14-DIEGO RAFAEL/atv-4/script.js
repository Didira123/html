var num = window.prompt("Diga o número natural para calcular seu fatorial: ");
window.alert("Fatorial de ["+num+"] é: "+fatorial(num));

function fatorial(valor){
    var fatorial = 1;
    if (parseInt(valor) < 0 || parseInt(valor) != parseFloat(valor)){
        fatorial = "N/A";
        return fatorial;
    }

    for(var cont = parseInt(valor); cont > 1;cont--){
        fatorial*= cont;
    }

    return fatorial;
}