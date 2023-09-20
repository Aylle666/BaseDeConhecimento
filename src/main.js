// Crie os ids dos contrroles do carrosel

// crie uma função para imprimir no console log os controles

/* 
  function imprimir o elemento(evento) {
    console.log(evento.target)
  }

*/

const controle1 = document.getElementById("controle-1");
const controle2 = document.getElementById("controle-2");
const controle3 = document.getElementById("controle-3");

const divImagens = document.getElementsByClassName("imagens")[0];

function selecionarBotao(evento, espacoEntreCadaImagem) {
  controle1.style.backgroundColor = "transparent";
  controle2.style.backgroundColor = "transparent";
  controle3.style.backgroundColor = "transparent";

  evento.target.style.backgroundColor = "white";

  moverImagem(evento.target.id, espacoEntreCadaImagem);
}

function moverImagem(controle, espacoEntreCadaImagem) {
  switch (controle) {
    case "controle-1":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(0)";
      break;

    case "controle-2":
      console.log(espacoEntreCadaImagem);
      divImagens.style.transform = `translateX(-${divImagens.offsetWidth}px) `;
      break;

    case "controle-3":
      divImagens.style.transform = `translateX(-${
        divImagens.offsetWidth * 2
      }px) translateX(-${espacoEntreCadaImagem}px)`;
      break;

    // case "controle-4":
    // DivImagens.style.transform = `translateX(-${
    // DivImagens.offsetwidth * 3
    // }px) trnaslateX(-${espacoEntreCadaImagem}px)`;
    // break;
  }
}
