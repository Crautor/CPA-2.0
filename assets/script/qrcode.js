async function dadoAsync(){
    var resposta = await fetch("https://pecgm0gy.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22qrcode%22%5D%7B%0A++%22qrcode%22%3Aqrcode.asset-%3Eurl%2C%0A++++%0A%7D",{
        method: "GET"
    });
    var minharesposta = await resposta.json();
    var qrcode = document.querySelector('img.ImgCapaCPA');
    qrcode.src = minharesposta.result[0].qrcode; 
}
dadoAsync();