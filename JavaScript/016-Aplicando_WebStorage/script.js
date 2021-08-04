/*
        Console do Navegador (F12)
        
        localStorage.setItem("nome", "Anderson");
        localStorage.getItem("nome");
        localStorage.removeItem("nome");
        
        localStorage.setItem("sobrenome", "Oliveira");
        localStorage.getItem("sobrenome");
        localStorage.removeItem("sobrenome");
        
        localStorage.nome = "Anderson";
        localStorage.nome;

        localStorage.lista = ["Anderson", "Matheus", 23];
        (3) ["Anderson", "Matheus", 23]
        localStorage.lista;
        "Anderson,Matheus,23"
*/

//var nome = localStorage.nome;
//console.log(nome);

var nome = '';
if ( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome?");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

