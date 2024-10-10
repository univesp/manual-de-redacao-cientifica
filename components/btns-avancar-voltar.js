
let buttonVoltar = document.createElement("div");
buttonVoltar.classList.add("btns", "button-rodape-voltar", "rodape-buttons", "button-aquamarine", "btn-voltar-avancar");
buttonVoltar.innerHTML = "Voltar";
let linkVoltar = document.createElement("a");
linkVoltar.classList.add("link-voltar");

let buttonAvancar = document.createElement("div");
buttonAvancar.classList.add("btns", "button-rodape-avancar", "rodape-buttons", "btn-voltar-avancar");
buttonAvancar.innerText = "Avançar";
let linkAvancar = document.createElement("a");
linkAvancar.classList.add("link-avancar");

let sectionBtns = document.querySelector(".rodape-buttons");
sectionBtns.appendChild(linkVoltar);
sectionBtns.appendChild(linkAvancar);
linkVoltar.appendChild(buttonVoltar);
linkAvancar.appendChild(buttonAvancar);

let buttonInicio = document.createElement("div");
buttonInicio.classList.add("btns", "button-rodape-inicio", "rodape-buttons", "button-aquamarine");
buttonInicio.innerText = `Início`;
let linkInicio = document.createElement("a");
linkInicio.setAttribute('href', '../index.html');
linkInicio.appendChild(buttonInicio);