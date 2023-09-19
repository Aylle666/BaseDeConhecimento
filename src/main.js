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
const controle4 = document.getElementById("controle-4");

const DivImagens = document.getElementsByClassName("imagens")[0];

function selecionarBotao(evento, espacoEntreCadaImagem) {
  controle1.style.backgroundColor = "transparent";
  controle2.style.backgroundColor = "transparent";
  controle3.style.backgroundColor = "transparent";
  controle4.style.backgroundColor = "transparent";

  evento.targe.style.backgroundColor = "white";

  moverImagem(evento.target.id, espacoEntreCadaImagem);

  console.log(DivImagens.offsetwidth);
}

function moverImagem(controle, espacoEntreCadaImagem) {
  switch ((controle, espacoEntreCadaImagem)) {
    case "controle-1":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(0)";
      break;

    case "controle-2":
      DivImagens.style.transform = `translateX(-${DivImagens.offsetwidth}px) trnaslateX(-${espacoEntreCadaImagem}px)`;
      break;

    case "controle-3":
      DivImagens.style.transform = `translateX(-${
        DivImagens.offsetwidth * 2
      }px) trnaslateX(-${espacoEntreCadaImagem}px)`;
      break;

    case "controle-4":
      DivImagens.style.transform = `translateX(-${
        DivImagens.offsetwidth * 3
      }px) trnaslateX(-${espacoEntreCadaImagem}px)`;
      break;
  }
}
