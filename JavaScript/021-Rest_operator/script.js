
function minhaLista(...nomes){
    console.log(nomes);
}

minhaLista("Matheus", "Lucas", "Joao", "Maria");

function minhaLista2(...numeros){
    console.log(numeros);
}

minhaLista2(1,2,3,4,5);

function cadastrar(usuarios, ...novosUsuarios){
    let totalusuarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalusuarios);
}

let usuarios = ["Matheus", "Joao"];

let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");

