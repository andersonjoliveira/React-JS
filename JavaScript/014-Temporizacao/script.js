function acao(){
    document.write("Executando...</br>");
}

// Executa de tempo em tempo!

//setInterval(acao, 1000);

//setTimeout(acao, 3000);

var timer = setInterval(acao, 1000);

/*
    No Console do Navegador (F12)
    clearInterval(timer); <= essa função para o setInterval()
    undefined
*/

