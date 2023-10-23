async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22diretrizes%22%5D%7B%0A++%0A%0A++%22titulo%22%3Atitulo%2C%0A++%22descricao%22%3Adescricao%2C%0A++%0A++%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    console.log(minharesposta.result[0]);
    var divtabsconteudo = document.querySelector('div.TabsConteudo')
    
    minharesposta.result.forEach((element, index) => {
        
        var divcard = document.createElement(`div`)
        divcard.classList.add("Card")
        
        var divnumerocard = document.createElement(`div`)
        divnumerocard.classList.add("NumeroCard")
        divnumerocard.innerText=`0${index+1}`
        
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

// TabsConteudo classe div
/* <div class="Card">
    <div class="NumeroCard">03</div>
    <div class="TextoCard" style="text-align: justify">
        <div class="TextoTituloCard">
        Aumentar a prestação de contas
        </div>
        <div class="TextoConteudoCard">
        Ajuda a aumentar a transparência da instituição e a
        prestação de contas aos órgãos regulatórios
        </div>
    </div>
</div> */