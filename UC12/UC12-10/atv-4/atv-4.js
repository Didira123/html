var nome = window.prompt("Diga seu nome: ");
var peso = parseFloat(window.prompt("Diga seu peso (kg): "));
var altura = parseFloat(window.prompt("Diga a sua altura (metros): "));
window.alert("O seu índice de gordura é: "+ (peso/(Math.pow(altura, 2))));