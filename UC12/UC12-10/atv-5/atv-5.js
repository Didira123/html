var num1 = parseInt(window.prompt("1º valor: "));
var num2 = parseInt(window.prompt("2º valor: "));
var operacao = window.prompt("Operacao a ser aplicada ( \"+\", \"-\", \"*\", \"/\"): ");
var result;
switch(operacao){
    case "+":
        result = num1+num2;
        break;
    case "-":
        result = num1-num2;
        break;
    case "*":
        result = num1*num2;
        break;
    case "/":
        result = num1/num2;
        break; 
    default:
        result = "Operacao inválida!";
        break;
    
}
window.alert(result);