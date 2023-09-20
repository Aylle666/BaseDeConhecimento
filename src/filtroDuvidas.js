const duvidaAtendimento = {
  titulo: "Atendimento",
  descrição:
    "Curabitur a felis in nunc fringilla tristique. Mauris sollicitudin fermentum libero. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
};

const duvidaDashboard = {
  titulo: "Dashboard",
  descrição:
    "Curabitur a felis in nunc fringilla tristique. Mauris sollicitudin fermentum libero. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
};

const arrayDeDuvidas = [duvidaAtendimento, duvidaDashboard];

// interprete apenas document.getElementsByClassName("baseDeConhecimentoElemento") como array
const baseDeConhecimento = Array.prototype.slice.call(
  document.getElementsByClassName("baseDeConhecimentoElemento")
);

const divBaseDeConhecimento =
  document.getElementsByClassName("baseDeConhecimento")[0];

function filtarDuvidas(evento) {
  console.log(evento.which);
  const isLetters =
    (evento.which <= 99 && evento.which >= 48) || evento.which === 8;
  // find --> Prototype (funções) de array
  // find(outra_função) --> outra_função --> callback
  const duvidaFiltrada = arrayDeDuvidas.find(
    (duvida) => duvida.titulo.toLowerCase() == evento.target.value.toLowerCase()
  );

  if (duvidaFiltrada && isLetters) {
    criarDuvidaFiltrada(duvidaFiltrada);
  } else if (document.getElementById("duvida")) {
    apagarDuvidaFiltrada(duvidaFiltrada);
  }
}

function criarDuvidaFiltrada(duvida) {
  // forEach --> Prototype do array
  baseDeConhecimento.forEach((element) => {
    element.style.display = "none";
  });
  let elementoDuvidaFiltrada;
  // Se não existir a div com id duvida, crie.
  if (!document.getElementById("duvida")) {
    // criando a div
    elementoDuvidaFiltrada = document.createElement("div");

    // colocando o id "duvida" no elemento criado
    elementoDuvidaFiltrada.id = "duvida";

    // adicionando o titulo na div
    elementoDuvidaFiltrada.append(duvida.titulo);

    // adiconando o elemento criado com o titulo na div baseDeConhecimento
    divBaseDeConhecimento.append(elementoDuvidaFiltrada);
  }
}

function apagarDuvidaFiltrada() {
  baseDeConhecimento.forEach((element) => {
    element.style.display = "flex";
  });

  document.getElementById("duvida").remove();
}
