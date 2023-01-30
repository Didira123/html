var nums = window.prompt("Diga 5 valores, separados por um espaço: ").split(" ");
var somatorio = 0;
nums.forEach(a=>
    somatorio+=parseFloat(a)
);
window.alert(`A média dos números informados é: ${somatorio/nums.length}`);