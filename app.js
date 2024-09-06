function pesquisar() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");

    console.log(section); // Loga o elemento no console para verificação

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
      section.innerHTML = "Escritor não encontrado. Por favor preencha o campo da pesquisa"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar a HTML dos resultados
    let resultados = "";
    let título = "";
    let descrição = "";
    let tags = "";

    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      título = dado.título.toLowerCase()
      descrição = dado.descrição.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()

      // se título includes campoPesquisa
      if (título.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.título}</a>
        </h2>
        <p class="descrição-meta">
          ${dado.descrição}
        </p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
      }

    }
    
    if (!resultados) {
      resultados = "<p>Escritor não encontrado</p>"

    }
    // Atribui a HTML construída ao elemento section, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }