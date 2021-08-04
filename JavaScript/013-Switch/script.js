
document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br> 2 - Coca Cola / 3 - Agua Gelada </br></br>");

// Switch


function pedir(){
    x = prompt("O que deseja pedir?");

    switch(x){
        case "0":
            alert("Voce pediu Sorvete!");
            break;
        case "1":
            alert("Voce pediu Suco!");
            break;
        case "2":
            alert("Voce pediu Coca Cola!");
            break;
        case "3":
            alert("Voce pediu Agua Gelada!");
            break;
        default:
            alert("Ops nao temos essa opcao!")
    }

}