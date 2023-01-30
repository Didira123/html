
var campoResult = document.querySelector("#result");
campoResult.addEventListener("click", function(){
    var num1 = document.querySelector("#num1");
    var num2 = document.querySelector("#num2");
    window.alert(parseFloat(num1.value) + parseFloat(num2.value));
});

