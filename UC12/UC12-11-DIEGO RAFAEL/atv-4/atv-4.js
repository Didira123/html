var nums = window.prompt(`Diga 3 números, separados por um espaço, cada um: `).split(" ");
var lista = [];
nums.forEach((a)=>{
    lista.push(a);
});
lista.sort((a, b)=>a-b);
var sequenciaFinal = "";
lista.forEach((a)=>
    sequenciaFinal +=a+", "
)
sequenciaFinal +="asd";
sequenciaFinal = sequenciaFinal.replace(/, asd/g, ".");
window.alert(`Os números listados, em ordem, ficam assim: ${sequenciaFinal}`);