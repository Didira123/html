var infos = window.prompt(`Diga um nome de uma pessoa, valor do peso dela (kg), a altura dela (metros) e o sexo dela (\"F\" ou \"M\"), separando cada valor com um espaço: `).split(" ");
var peso = parseFloat(infos[1]);
var imc = peso/Math.pow(parseFloat(infos[2]), 2);
var clasPeso = "Obesidade Grau III";
console.log(peso);
if (infos[3].toUpperCase() ==="F"){
    if (peso<=19.199999){
        clasPeso = "Abaixo do Peso";
    } else if(peso>19.1 && peso<=25.8){
        clasPeso = "Peso ideal";
    } else if(peso>=25.9 && peso<=27.3){
        clasPeso = "Obesidade Grau I";
    } else if(peso>=27.4 && peso<=32.4){
        clasPeso = "Obesidade Grau II";
    } else if(peso>=32.5 && peso<=39){
        clasPeso = "Obesidade Grau III";
    }
} else {
    if (peso<=18.5){
        clasPeso = "Abaixo do Peso";
    } else if(peso>18.5 && peso<=24.9){
        clasPeso = "Peso ideal";
    } else if(peso>=25 && peso<=29.9){
        clasPeso = "Obesidade Grau I";
    } else if(peso>=30 && peso<=34.9){
        clasPeso = "Obesidade Grau II";
    } else if(peso>=35 && peso<=39.9){
        clasPeso = "Obesidade Grau III";
    }
}
window.alert(`${infos[0]} possui IMC = ${imc} e a classificação é \"${clasPeso}\"`);