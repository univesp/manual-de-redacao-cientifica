let divInformacoes = document.createElement("div");
divInformacoes.classList.add("div-informacoes", "container", "d-flex", "border-box-shadow");
document.querySelector(".informacoes").appendChild(divInformacoes);

let divInterrogacao = document.createElement("div");
divInterrogacao.classList.add("interrogacao");
divInterrogacao.innerText = "?";
divInformacoes.appendChild(divInterrogacao);

let divTextoInformacoes = document.createElement("div");
divTextoInformacoes.innerText = "Deseja informações sobre qual seção dentre as seções que compõem o relatório acadêmico?";
divInformacoes.appendChild(divTextoInformacoes);


