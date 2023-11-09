async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=+*%5B_type+%3D%3D+%22pontosPositivos%22%5D%7B%0A+++%22titulo%22%3A+titulo%2C%0A+++%22descricao%22%3Adescricao%2C%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var tp1 = document.createElement("div")
    tp1=document.querySelector("div#tp1")
    var tp2 = document.createElement("div")
    tp2=document.querySelector("div#tp2")
    minharesposta.result.forEach((element, index) => {
        var divConteudoPontosTextoTopicosItem = document.createElement("div")
        divConteudoPontosTextoTopicosItem.classList.add("ConteudoPontosTextoTopicosItem")
        var divConteudoPontosTextoTopicosItemTit = document.createElement("div")
        divConteudoPontosTextoTopicosItemTit.classList.add("ConteudoPontosTextoTopicosItemTit")
        divConteudoPontosTextoTopicosItemTit.classList.add("ConteudoObjetivoTextoTitulo")
        divConteudoPontosTextoTopicosItemTit.innerText=`${minharesposta.result[index].titulo}`
        var divConteudoPontosTextoTopicosItemCon = document.createElement("div")
        divConteudoPontosTextoTopicosItemCon.classList.add("ConteudoPontosTextoTopicosItemCon")
        divConteudoPontosTextoTopicosItemCon.classList.add("ConteudoObjetivoTextoConteudo")
        divConteudoPontosTextoTopicosItemCon.innerText=`${minharesposta.result[index].descricao}`
        if (index<2) {
            tp1.appendChild(divConteudoPontosTextoTopicosItem)
            divConteudoPontosTextoTopicosItem.appendChild(divConteudoPontosTextoTopicosItemTit)
            divConteudoPontosTextoTopicosItem.appendChild(divConteudoPontosTextoTopicosItemCon)
        }
        if (index>=2){
            tp2.appendChild(divConteudoPontosTextoTopicosItem)
            divConteudoPontosTextoTopicosItem.appendChild(divConteudoPontosTextoTopicosItemTit)
            divConteudoPontosTextoTopicosItem.appendChild(divConteudoPontosTextoTopicosItemCon)
        }
    });
}
dadoAsync();