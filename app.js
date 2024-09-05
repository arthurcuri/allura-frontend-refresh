// Função para pesquisar e exibir os resultados na seção "resultados-pesquisa"
function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";

  // Itera sobre cada dado no array de dados
  for (let dado of dados) {
    // Constrói o HTML para cada item do resultado
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
      </div>
    `;
  }

  // Atribui o HTML construído à seção de resultados
  section.innerHTML = resultados;
}
