async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22diretrizes%22%5D%7B%0A++%0A%0A++%22titulo%22%3Atitulo%2C%0A++%22descricao%22%3Adescricao%2C%0A++%0A++%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var divtabsconteudo = document.querySelector('div.TabsConteudo')
    minharesposta.result.forEach((element, index) => {
        var divcard = document.createElement(`div`)
        divcard.classList.add("Card")
        var divnumerocard = document.createElement(`div`)
        divnumerocard.classList.add("NumeroCard")
      
        var divtextocard = document.createElement(`div`)
        divtextocard.classList.add("TextoCard")
        divtextocard.style="text-align: justify"
        var divtextotitulocard = document.createElement(`div`)
        divtextotitulocard.classList.add("TextoTituloCard")
        divtextotitulocard.innerText=`${minharesposta.result[index].titulo}`
        var divtextoconteudocard = document.createElement(`div`)
        divtextoconteudocard.classList.add("TextoConteudoCard")
        divtextoconteudocard.innerText=`${minharesposta.result[index].descricao}`
        divtabsconteudo.appendChild(divcard)
        divcard.appendChild(divnumerocard)
        divcard.appendChild(divtextocard)
        divtextocard.appendChild(divtextotitulocard)
        divtextocard.appendChild(divtextoconteudocard)
    });
}
dadoAsync();