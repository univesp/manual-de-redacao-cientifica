const conteudoContainer = document.querySelector(".conteudo");

const todoConteudo = document.createElement("div");
todoConteudo.classList.add("todo-conteudo");
conteudoContainer.appendChild(todoConteudo);

const tituloConteudo = document.createElement("div");
tituloConteudo.classList.add("titulo-conteudo");
todoConteudo.appendChild(tituloConteudo);

const componentsConteudo = document.createElement("div");
componentsConteudo.classList.add("componentes-conteudo");
conteudoContainer.appendChild(componentsConteudo);


