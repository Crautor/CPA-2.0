
async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=+*%5B_type+%3D%3D+%22graficos%22%5D%7B%0A+++%22graficosatisfacaobpk%22%3A+graficosatisfacaobpk.asset-%3Eurl%2C%0A+++%22legendasatisfacaobpk%22%3A+legendasatisfacaobpk%2C%0A+++%22graficosatisfacaocurso%22%3Agraficosatisfacaocurso.asset-%3Eurl%2C%0A+++%22legendasatisfacaocurso%22%3Alegendasatisfacaocurso%2C%0A+++%22graficosatisfacaoinfra%22%3Agraficosatisfacaoinfra.asset-%3Eurl%2C++%0A+++%22legendasatisfacaoinfra%22%3Alegendasatisfacaoinfra%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var g1 = document.querySelector('img#g1');
    var g2 = document.querySelector('img#g2');
    var g3 = document.querySelector('img#g3');
    var l1 = document.querySelector('div#l1');
    var l2 = document.querySelector('div#l2');
    var l3 = document.querySelector('div#l3');
    g1.src = minharesposta.result[0].graficosatisfacaobpk;
    l1.innerText= minharesposta.result[0].legendasatisfacaobpk;
    g2.src = minharesposta.result[0].graficosatisfacaocurso; 
    l2.innerText= minharesposta.result[0].legendasatisfacaocurso;
    g3.src = minharesposta.result[0].graficosatisfacaoinfra; 
    l3.innerText= minharesposta.result[0].legendasatisfacaoinfra;
    console.log(minharesposta.result[0]);
}
dadoAsync();
