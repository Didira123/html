var num = window.prompt("Diga um número inteiro: ");
parImpar = "par";
if(num%2 == 1){parImpar="impar"};
window.alert(`O número ${num} é ${parImpar}`);