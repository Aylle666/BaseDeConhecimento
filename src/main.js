const controle1 = document.getElementById("controle-1");
const controle2 = document.getElementById("controle-2");
const controle3 = document.getElementById("controle-3");
const controle4 = document.getElementById("controle-4");

function selecionarBotao(evento) {
  controle1.style.backgroundColor = "transparent";
  controle2.style.backgroundColor = "transparent";
  controle3.style.backgroundColor = "transparent";
  controle4.style.backgroundColor = "transparent";

  evento.target.style.backgroundColor = "white";

  moverImagem(evento.target.id);
}
// função para mover a imagem depois do click
function moverImagem(controle) {
  // Switch é como um if else

  // no primeiro exemplo, se o controle for igual a "controle-2", aplique o css translateX 100% do tamanho da imagem
  switch (controle) {
    case "controle-1":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(0)";
      break;
    case "controle-2":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(-100%)";
      break;
    case "controle-3":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(-200%)";
      break;
    case "controle-4":
      document.getElementsByClassName("imagens")[0].style.transform =
        "translateX(-300%)";
      break;
  }
}
