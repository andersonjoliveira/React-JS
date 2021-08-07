
//some
//every

//let nomes = ['Matheus', 'Lucas', 'Henrique'];
//console.log(nomes.some(nome => nome === 'Matheus'));

let nomes = [
    {nome: 'Matheus', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'Henrique', idade: 15}
];

console.log(nomes.every(nome => nome.idade >= 18));

if(nomes.every(nome => nome.idade >= 18)){
    console.log('TODOS SAO MAIORES DE 18')
}else{
    console.log('OPS ALGUEM EH DE MENOR')
}

