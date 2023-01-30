
var nums = window.prompt(`Diga a idade de 5 pessoas: `).split(" ");
var maior = 0;
var menor = 0;
for (var cont = 0; cont<nums.length; cont++){
    var valor = parseFloat(nums[cont]);
    if (valor>18){maior++;}
    else if (valor<18){menor++;}

}
window.alert(`Maiores de 18: ${maior}\nMenores de 18: ${menor}`);


