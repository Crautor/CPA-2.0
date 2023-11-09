
async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=+*%5B_type+%3D%3D+%22graficos%22%5D%7B%0A+++%22graficosatisfacaobpk%22%3A+graficosatisfacaobpk.asset-%3Eurl%2C%0A+++%22graficosatisfacaocurso%22%3Agraficosatisfacaocurso.asset-%3Eurl%2C%0A+++%22graficosatisfacaoinfra%22%3Agraficosatisfacaoinfra.asset-%3Eurl%2C++%0A+%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var g1 = document.querySelector('img#g1');
    var g2 = document.querySelector('img#g2');
    var g3 = document.querySelector('img#g3');
    g1.src = minharesposta.result[0].graficosatisfacaobpk; 
    g2.src = minharesposta.result[0].graficosatisfacaocurso; 
    g3.src = minharesposta.result[0].graficosatisfacaoinfra; 
}
dadoAsync();
