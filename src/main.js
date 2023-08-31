const controle1 = document.getElementById("controle-1");
const controle2 = document.getElementById("controle-2");
const controle3 = document.getElementById("controle-3");
const controle4 = document.getElementById("controle-4");

function selecionarBotao(evento) {
  // Primeiro deixo todos com background transparent
  controle1.style.backgroundColor = "transparent";
  controle2.style.backgroundColor = "transparent";
  controle3.style.backgroundColor = "transparent";
  controle4.style.backgroundColor = "transparent";

  // Depois eu pego o algo (target) do click e pinto ele de branco
  evento.target.style.backgroundColor = "white";
}
