function pesquisar () {
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Pesquise entre os anos 2014 a 2023 ou nomes dos jogos.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

     let resultados = "";
     let titulo = "";
     let descricao ="";

    for (let dado of dados) {
    
     titulo = dado.titulo.toLowerCase()
     descricao = dado.descricao.toLowerCase()

if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
    resultados += `
    <div class="item-resultado">
         <h3>${dado.titulo}</h3>
         <p class="descricao-meta">${dado.descricao}</p>
         <a href=${dado.link} target="_blank">Saiba mais</a>
         <br>
         <img src=${dado.imagem}>
    </div>
 `;
  }
}

if (!resultados) {
    resultados = "<p>Nada foi encontrado.</p>"
}

section.innerHTML = resultados
}
