   // Mostra modal de cookies se ainda não existir no local storage
   if(!localStorage.getItem('cookiesStorage')){
    $("#exampleModalCenter").modal('show');
   }

   const cookies = document.querySelectorAll('.event-cookie');

   cookies.forEach(e=>{
    e.addEventListener('click', function(){
      localStorage.setItem('cookiesStorage', true);
    })
   })

  //  const conteudoContainerTitulo = document.querySelector(".titulo-container");
  //  let conteudoContainer = document.querySelector(".conteudo");
  const buttonMenu = document.querySelectorAll(".button-menu");

   // Carrega conteudo 1 quando a página é carregada
   tituloConteudo.innerHTML = tituloTitulo;
   componentsConteudo.innerHTML = tituloComponent;
   buttonTitulo.classList.add("button-aquamarine");
   localStorage.setItem("conteudoAtual", "conteudo0");
   
   function retiraAquamarine(){
    buttonMenu.forEach(e => {
      e.classList.remove("button-aquamarine");
    })
   }


  // Trocando cor dos botões
  // function selectLink () {
  //   buttonMenu.forEach((item) =>
  //   item.classList.remove('button-aquamarine'))
  //   this.classList.add('button-aquamarine');
  // }
  // buttonMenu.forEach((item) => 
  // item.addEventListener ('click', selectLink)
  // );
  
  //Trocando conteudo
   buttonMenu.forEach(e => {
    e.addEventListener('click', function() {
      switch (e.id) {
        case 'button0':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloTitulo;
          componentsConteudo.innerHTML = tituloComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo0");
        break;

        case 'button1':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloIntroducao;
          componentsConteudo.innerHTML = introducaoComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo1");
        break;

        case 'button2':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloObjetivos;
          componentsConteudo.innerHTML = objetivosComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo2");
          break;

        case 'button3':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloJustificativa;
          componentsConteudo.innerHTML = justificativaComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo3");
          break;

        case 'button4':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloFundamentacao;
          componentsConteudo.innerHTML = fundamentacaoComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo4");
        break;
        
        case 'button5':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloAplicacao;
          componentsConteudo.innerHTML = aplicacaoComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo5");
        break;

        case 'button6':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloMetodologias;
          componentsConteudo.innerHTML = metodologiasComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo6");
        break;

        case 'button7':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloResultados;
          componentsConteudo.innerHTML = resultadosComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo7");
        break;
        
        case 'button8':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloConsideracoes;
          componentsConteudo.innerHTML = consideracoesComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo8");
        break;
        
        case 'button9':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloReferencias;
          componentsConteudo.innerHTML = referenciasComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo9");
        break;
        
        case 'button10':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloAnexos;
          componentsConteudo.innerHTML = anexosComponent;
          buttonInicio.style = `display: none`;
          buttonVoltar.style = `display: flex`;
          buttonAvancar.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo10");
        break;
        
        case 'button11':
          retiraAquamarine();
          e.classList.add("button-aquamarine");
          tituloConteudo.innerHTML = tituloBibliografia;
          componentsConteudo.innerHTML = bibliografiaComponent;
          // buttonVoltar.style =`display: none`;
          buttonAvancar.style = `display: none`;
          sectionBtns.appendChild(linkInicio);
          buttonInicio.style = `display: flex`;
          localStorage.setItem("conteudoAtual", "conteudo11");
        break;
      }
      
    })
   })


   //Setando todos os titulos e componentes dentro de Arrays
   let titulos = [tituloTitulo, tituloIntroducao, tituloObjetivos, tituloJustificativa, tituloFundamentacao, tituloAplicacao, tituloMetodologias, tituloResultados, tituloConsideracoes, tituloReferencias, tituloAnexos, tituloBibliografia];

   let components = [tituloComponent, introducaoComponent, objetivosComponent, justificativaComponent, fundamentacaoComponent, aplicacaoComponent, metodologiasComponent, resultadosComponent, consideracoesComponent, referenciasComponent, anexosComponent, bibliografiaComponent];


   //Avançando conteudos com o botão "Avançar"
   let botaoAvancar = document.querySelector(".link-avancar");

   botaoAvancar.addEventListener('click', function(){

    window.scrollTo(0, 0);

    const conteudoAtual = localStorage.getItem("conteudoAtual");

    for (let i = 0; i < titulos.length; i++) {

      let btnAtual = document.querySelector(`#button${i+1}`);
      
      if(conteudoAtual === `conteudo${i}` && conteudoAtual !== 'conteudo10'){

        retiraAquamarine();
        tituloConteudo.innerHTML = titulos[i+1];
        componentsConteudo.innerHTML = components[i+1];
        localStorage.setItem("conteudoAtual", `conteudo${i+1}`);
        btnAtual.classList.add("button-aquamarine");

      }else if(conteudoAtual === 'conteudo10'){
        retiraAquamarine();
        tituloConteudo.innerHTML = titulos[11];
        componentsConteudo.innerHTML = components[11];
        localStorage.setItem("conteudoAtual", `conteudo11`);
        // buttonVoltar.style =`display: none`;
        buttonAvancar.style = `display: none`;
        sectionBtns.appendChild(linkInicio);
        buttonInicio.style = `display: flex`;
      }
    }

   })


   //Voltando conteudos com o botão "Voltar"
   let botaoVoltar = document.querySelector(".link-voltar");

   botaoVoltar.addEventListener('click', function(){

    window.scrollTo(0, 0);

    const conteudoAtual = localStorage.getItem("conteudoAtual");

    for (let i = 0; i < titulos.length; i++) {

      let btnAtual = document.querySelector(`#button${i-1}`);
      
      if(conteudoAtual === `conteudo${i}`  && conteudoAtual !== 'conteudo0'){

        retiraAquamarine();
        tituloConteudo.innerHTML = titulos[i-1];
        componentsConteudo.innerHTML = components[i-1];
        localStorage.setItem("conteudoAtual", `conteudo${i-1}`);
        btnAtual.classList.add("button-aquamarine");

      }else if(conteudoAtual === 'conteudo0'){
        window.location.href = '../index.html';
      }
      else if(conteudoAtual === 'conteudo11'){
        retiraAquamarine();
        tituloConteudo.innerHTML = titulos[10];
        componentsConteudo.innerHTML = components[10];
        localStorage.setItem("conteudoAtual", `conteudo10`);
        buttonVoltar.style =`display: flex`;
        buttonAvancar.style = `display: flex`;
        buttonInicio.style = `display: none`;
      }
    }

   })