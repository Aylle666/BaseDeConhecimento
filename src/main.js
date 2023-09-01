const controle1 = document.getElementById("controle-1");
const controle2 = document.getElementById("controle-2");
const controle3 = document.getElementById("controle-3");
const controle4 = document.getElementById("controle-4");

/* Capturando a div das imagens */
const divImagens = document.getElementsByClassName("imagens")[0];

/* Capturando a div de uma imagem */
const divImagem = document.querySelector(".imagem");

function selecionarBotao(evento) {
  controle1.style.backgroundColor = "transparent";
  controle2.style.backgroundColor = "transparent";
  controle3.style.backgroundColor = "transparent";
  controle4.style.backgroundColor = "transparent";

  evento.target.style.backgroundColor = "white";

  console.log(divImagens.offsetWidth);

  moverImagem(evento.target.id);
}
// função para mover a imagem depois do click
function moverImagem(controle) {
  // Switch é como um if else

  // no primeiro exemplo, se o controle for igual a "controle-2", aplique o css translateX 100% do tamanho da imagem
  switch (controle) {
    case "controle-1":
      divImagens.style.transform = "translateX(0)";
      break;
    case "controle-2":
      // Lembre-se q deve transladar para direita o tamano da div mais o gap
      divImagens.style.transform = `translateX(-${divImagem.offsetWidth}px) translateX(-24px)`;
      break;
    case "controle-3":
      divImagens.style.transform = `translateX(-${
        divImagem.offsetWidth * 2
      }px) translateX(-48px)`;
      break;
    case "controle-4":
      divImagens.style.transform = `translateX(-${
        divImagem.offsetWidth * 3
      }px) translateX(-72px)`;
      break;
  }
}
