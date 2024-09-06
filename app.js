function pesquisar() {
  // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Obtém o valor digitado no campo de pesquisa
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // Verifica se o campo de pesquisa está vazio
  if (!campoPesquisa) {
    // Exibe uma mensagem informando que o campo de pesquisa está vazio
    section.innerHTML = "<p>Por favor, digite algo para pesquisar</p>";
    return;
  }

  // Converte o valor do campo de pesquisa para minúsculas
  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre os dados disponíveis (presumivelmente uma lista de objetos)
  for (let dado of dados) {
    // Converte os campos de título, descrição e tags para minúsculas
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();

    // Verifica se o termo de pesquisa está contido no título, descrição ou tags
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Se houver uma correspondência, adiciona um novo elemento de resultado formatado
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
      `;
    }
  }

  // Se nenhum resultado foi encontrado, exibe uma mensagem apropriada
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }

  // Insere os resultados (ou mensagem de nada encontrado) na seção HTML
  section.innerHTML = resultados;
}
