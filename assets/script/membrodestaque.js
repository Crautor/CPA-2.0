async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22membrosDestaque%22%5D%7B%0A++%22imagem%22%3Aimagem.asset-%3Eurl%2C%0A++%22nome%22%3Anome%2C%0A++%22sobrenome%22%3Asobrenome%2C%0A++%22cargo%22%3Acargo%2C%0A%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var imagem = document.querySelector('img.destaque');
    imagem.src = minharesposta.result[0].imagem; 
    var h3 = document.querySelector("h3.h3destaque")
    h3.innerHTML=`${minharesposta.result[0].nome}<span> ${minharesposta.result[0].sobrenome}</span>`
    var h4 = document.querySelector("h4.h4destaque")
    h4.innerText = `${minharesposta.result[0].cargo}`
    var texto = document.createElement("p");
    texto.inner
}
dadoAsync();
