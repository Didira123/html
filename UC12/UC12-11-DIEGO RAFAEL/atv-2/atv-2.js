var nums = window.prompt("Diga 2 números, separados por um espaço: ").split(" ");
var quociente = 0;
if (parseFloat(nums[1]) != 0){
    window.alert(`O quociente da divisão [${nums[0]}] / [${nums[1]}] = [${parseInt(nums[0]/nums[1])}]`)
} else{
window.alert(`A divisão não pode ser realizada!`);
}
