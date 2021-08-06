function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '6544'
    };

    return novosDados;

}

console.log(cadastroPessoa({nome: 'Lucas', sobrenome: 'Braga', anoInicio:2045}));
