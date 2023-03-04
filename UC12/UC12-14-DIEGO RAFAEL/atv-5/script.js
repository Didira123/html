var valores = window.prompt("Diga 1 valor, uma operação (\"+\", \"*\"...) e um outro valor para efetuar o cálculo (separe os valores e a operação com um espaço): ").split(" ");
var operacao = valores[1];
var num1 = parseFloat(valores[0]);
var num2 = parseFloat(valores[2]);
var resultado;
switch(operacao){
    case "+":
        resultado = somar(num1, num2);
        break;
    case "*":
        resultado = multiplicar(num1, num2);
        break;
    case "/":
        resultado = dividir(num1, num2);
        break;
    case "-":
        resultado = subtrair(num1, num2);
        break;
}
if (resultado != null && resultado != undefined){
    window.alert("o resultado é: "+resultado);
} else{
    window.alert("Operação não implementada");
}

function somar(a, b){
    return a+b;
}
function subtrair(a, b){
    return a-b;
}
function multiplicar(a, b){
    return a*b;
}
function dividir(a, b){
    return a/b;
}