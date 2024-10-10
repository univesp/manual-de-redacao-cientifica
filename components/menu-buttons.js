// DIV DO MENU
let divMenu = document.createElement("div");
divMenu.classList.add("div-menu");
document.querySelector(".menu-buttons").appendChild(divMenu);

// TITULO
let buttonTitulo = document.createElement("div");
buttonTitulo.classList.add("button-menu", "button-titulo", "btns");
buttonTitulo.setAttribute('id', 'button0');
buttonTitulo.innerHTML = `Título`;
divMenu.appendChild(buttonTitulo);

// INTRODUÇÃO
let buttonIntroducao = document.createElement("div");
buttonIntroducao.classList.add("button-menu", "btns");
buttonIntroducao.setAttribute('id', 'button1');
buttonIntroducao.innerText = "Introdução";
divMenu.appendChild(buttonIntroducao);

// OBJETIVOS
let buttonObjetivos = document.createElement("div");
buttonObjetivos.classList.add("button-menu", "btns");
buttonObjetivos.setAttribute('id', 'button2');
buttonObjetivos.innerText = "Objetivos";
divMenu.appendChild(buttonObjetivos);

// JUSTIFICATIVA
let buttonJustificativa = document.createElement("div");
buttonJustificativa.classList.add("button-menu", "btns");
buttonJustificativa.setAttribute('id', 'button3');
buttonJustificativa.innerText = "Justificativa e delimitação do problema";
divMenu.appendChild(buttonJustificativa);

// FUNDAMENTAÇÃO
let buttonFundamentacao = document.createElement("div");
buttonFundamentacao.classList.add("button-menu", "btns");
buttonFundamentacao.setAttribute('id', 'button4');
buttonFundamentacao.innerText = "Fundamentação Teórica";
divMenu.appendChild(buttonFundamentacao);

// APLICAÇÃO DAS DISCIPLINAS
let buttonAplicacao = document.createElement("div");
buttonAplicacao.classList.add("button-menu", "btns");
buttonAplicacao.setAttribute('id', 'button5');
buttonAplicacao.innerText = "Aplicação das disciplinas estudadas";
divMenu.appendChild(buttonAplicacao);

// METODOLOGIA
let buttonMetodologia = document.createElement("div");
buttonMetodologia.classList.add("button-menu", "btns");
buttonMetodologia.setAttribute('id', 'button6');
buttonMetodologia.innerText = "Metodologia";
divMenu.appendChild(buttonMetodologia);

// RESULTADOS
let buttonResultados = document.createElement("div");
buttonResultados.classList.add("button-menu", "btns");
buttonResultados.setAttribute('id', 'button7');
buttonResultados.innerText = "Resultados / Solução Inicial / Solução Final";
divMenu.appendChild(buttonResultados);

// CONSIDERAÇÕES FINAIS
let buttonConsideracoesFinais = document.createElement("div");
buttonConsideracoesFinais.classList.add("button-menu", "btns");
buttonConsideracoesFinais.setAttribute('id', 'button8');
buttonConsideracoesFinais.innerText = "Considerações Finais";
divMenu.appendChild(buttonConsideracoesFinais);

// REFERÊNCIAS
let buttonReferencias = document.createElement("div");
buttonReferencias.classList.add("button-menu", "btns");
buttonReferencias.setAttribute('id', 'button9');
buttonReferencias.innerText = "Referências";
divMenu.appendChild(buttonReferencias);

// ANEXOS
let buttonAnexos = document.createElement("div");
buttonAnexos.classList.add("button-menu", "btns");
buttonAnexos.setAttribute('id', 'button10');
buttonAnexos.innerText = "Anexos e Apêndices";
divMenu.appendChild(buttonAnexos);

// BIBLIOGRAFIA
let buttonBibliografia = document.createElement("div");
buttonBibliografia.classList.add("button-menu", "button-rosa", "btns");
buttonBibliografia.setAttribute('id', 'button11');
buttonBibliografia.innerText = "Bibliografia";
divMenu.appendChild(buttonBibliografia);
