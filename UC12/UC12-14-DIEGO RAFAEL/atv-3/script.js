imprimirBemVindoComIdentificador(promptValor());

function promptValor(){
    return window.prompt("Diga o valor a ser recebido (texto, número, etc): "); //mensagem generica, como se ela pudesse ser usada em outros casos;
}
function imprimirBemVindoComIdentificador(identificador){
    window.alert("Bem vindo(a) "+String(identificador));
}