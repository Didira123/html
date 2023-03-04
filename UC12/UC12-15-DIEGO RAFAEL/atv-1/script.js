document.body.innerHTML += "<h1>H1</h1><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eos odio a itaque quod ipsum consequatur magni eius qui iusto reiciendis dolore ea dolorum, unde deleniti corrupti minus id rerum.</p>";
document.body.innerHTML += "<h2>H2</h2><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eos odio a itaque quod ipsum consequatur magni eius qui iusto reiciendis dolore ea dolorum, unde deleniti corrupti minus id rerum.</p>";
document.body.innerHTML += "<h3>H3</h3><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab eos odio a itaque quod ipsum consequatur magni eius qui iusto reiciendis dolore ea dolorum, unde deleniti corrupti minus id rerum.</p>";
document.body.innerHTML += "<div class=\"botaoMudar\">Alterar Conteúdo</div>";
document.querySelector(".botaoMudar").addEventListener("click", function(){
    document.querySelector("h1").textContent = "NOVO H1";
    var listP = document.querySelectorAll("p");

    for(let cont = 0; cont < listP.length; cont++){
        listP[cont].textContent = "paragrafo "+(cont+1);
    }
});