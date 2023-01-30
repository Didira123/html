var num = window.prompt("Diga um número inteiro e positivo: ");
parImpar = "par";
if(num%2 == 1){parImpar="impar"};
window.alert(`O número ${num} é ${parImpar}. ${num} ao quadrado é ${Math.pow(num, 2)}`);