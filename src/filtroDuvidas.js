// Nesse processo estamos criando uma variável constante onde uma vez declarada seu valor não podera mais ser alterada.
// É aplicada uma propriedade Titulo para entitular DuvidaAtendimento
const duvidaEntrada = {
  titulo: "Entrada",
  descrição:
    "Na opção de entrada, é apresentado um panorama geral das solicitações dos cidadãos para o setor responsável, é possível visualizar a quantidade de solicitações em aberto, em atraso, em atendimento, atendimentos encerrados e itens para revisão.",
  subCategorias: [],
  palavrasChave: [
    "Em",
    "aberto",
    "Solicitação",
    "aguardando",
    "atendimento;",
    "atraso",
    "e",
    "passou",
    "do",
    "prazo",
    "estipulado;",
    "atendimento",
    "pelo",
    "agente;",
    "Atendimentos",
    "encerrados",
    "encerrada",
    "pelo",
    "Itens",
    "para",
    "revisão",
    "Sinalização",
    "de",
    "quantidade",
    "produtos",
    "comércio",
    "local",
    "validação.",
  ],
};

const duvidaDashboard = {
  titulo: "Dashboard",
  descrição:
    "O Dashboard é dividido em algumas categorias. São elas: geral, serviços e inscrições. Com isso, o Dashboard ajuda a gestão municipal na tomada de decisões mais assertivas.",
  subCategorias: [],
  palavrasChave: [
    "Contas Criadas",
    "Protocolos Criados",
    "Mensagens Enviadas",
    "Agendamentos Criados",
    "Publicações em Notícias",
    "Publicações de Eventos",
    "Produtos Cadastrados no Comércio Local",
    "Vendedores Cadastrados no Comércio Local",
    "Titulares Criados",
    "Geral",
    "Serviços",
    "Inscrições",
  ],
};

const duvidaAtendimentos = {
  titulo: "Atendimentos",
  descrição:
    "AtendentesPorServiço, MapaDeAtendimento, RegistrarProtocolo, HistoricoDeProtocolo, AreaDeAtendimento",
};

const duvidaAgendamentosPresenciais = {
  titulo: "duvidaAgendamentosPresenciais",
  descrição: "areaDeAtendimento, configurações",
  subCategorias: [{ titulo: "areaDoAtendimento" }, { titulo: "configurações" }],
  palavrasChave: ["Agendamento", "Agendamento presencial", "presencial"],
};

duvidaAgendamentosPresenciais.palavrasChave.find((palavra) =>
  palavra.includes("a")
);
duvidaAgendamentosPresenciais.subCategorias.find((subCategoria) =>
  subCategoria.titulo.includes("a")
);

// esse Array, "arrayDeDuvidas" é um array que contem os elementos anteriores (variável constante), o agrupamento deles formam esse array
const arrayDeDuvidas = [
  duvidaAtendimento,
  duvidaDashboard,
  duvidaAtendentesPorServiço,
  duvidaAgendamentosPresenciais,
];

// Aqui está sendo criada uma constante "baseDeConheCimento onde está recebendo o valor do array "arrayDeDuvidas"
// "arrayDeDuvidas.pototype.call" é usado para converter um onjeto semelhante a uma lista em um verdadeiro array.
// Nessa parte, estamos pegando todos elementos que contem a classe "baseDeConhecimento". Em seguida, está usando Array.prototype.slice.call para converter essa coleção em uma verdadeira array e atribuí-la à constante baseDeConhecimentos.
// Agora, baseDeConhecimentos é uma array contendo os elementos que têm a classe "baseDeConhecimentoElemento". Isso facilita o trabalho com esses elementos como uma coleção indexada
const baseDeConhecimentos = Array.prototype.slice.call(
  document.getElementsByClassName("baseDeConhecimentoElemento")
);

// Ela está pegando o primeiro elemento no documento que tem a classe "baseDeConhecimento".
// Em seguida, está atribuindo esse elemento à constante divBaseDeConhecimento.
// Agora, divBaseDeConhecimento contém uma referência ao primeiro elemento com a classe "baseDeConhecimento". Isso permite que você acesse e manipule esse elemento no código.
const divBaseDeConhecimento =
  document.getElementsByClassName("baseDeConhecimento")[0];

// Em resumo, esta função parece estar envolvida em um processo de filtragem de dúvidas com base no que o usuário digita em um campo.
// O código verifica se a tecla pressionada é uma letra ou o "Backspace", e em seguida,
// procura na array de dúvidas uma que corresponda ao que foi digitado, ignorando maiúsculas e minúsculas.
function filtrarDuvidas(evento) {
  console.log(evento.which);
  const isLetters =
    (evento.which <= 99 && evento.which >= 48) || evento.which === 8;
  const duvidaFiltrada = arrayDeDuvidas.find(
    (duvida) => duvida.titulo.toLowerCase() == evento.target.value.toLowerCase()
  );

  // Em resumo, o bloco condicional if verifica se duvidaFiltrada e isLetters são ambas verdadeiras.
  // Se ambas forem verdadeiras, a função criarDuvidaFiltrada será chamada com duvidaFiltrada como argumento.
  // Caso contrário, o código dentro do bloco if será ignorado.
  if (duvidaFiltrada && isLetters) {
    criarDuvidaFiltrada(duvidaFiltrada);
  }

  // Em resumo, este bloco condicional verifica se há elementos com a classe "duvida".
  // Se houver, a função apagarDuvidaFiltrada será chamada com duvidaFiltrada como argumento.
  // Caso contrário, o código dentro do bloco else if será ignorado.
  else if (document.getElementById("duvida")) {
    apagarDuvidaFiltrada(duvidaFiltrada);
  }
}

// esta função parece criar um novo elemento <div> (se o elemento com o ID "duvida" ainda não existir), atribui um ID a ele, adiciona o título da duvida e insere esse novo elemento na divBaseDeConhecimento.
// Além disso, ela torna invisíveis todos os elementos em baseDeConhecimentos.
function criarDuvidaFiltrada(duvida) {
  baseDeConhecimentos.forEach((element) => {
    element.style.display = "none";
  });
  let elementoDuvidaFiltrada;
  if (!document.getElementById("duvida")) {
    elementoDuvidaFiltrada = document.createElement("div");
    elementoDuvidaFiltrada.id = "duvida";
    elementoDuvidaFiltrada.append(duvida.titulo);
    divBaseDeConhecimento.append(elementoDuvidaFiltrada);
  }
}

// sta função reverte as mudanças feitas pela função criarDuvidaFiltrada.
// Ela torna visíveis todos os elementos em baseDeConhecimento (definindo display como "flex") e remove o elemento com o ID "duvida" do DOM.
function apagarDuvidaFiltrada() {
  baseDeConhecimentos.forEach((element) => {
    element.style.display = "flex";
  });
  document.getElementById("duvida").remove();
}
