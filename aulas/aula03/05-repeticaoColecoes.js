lista = new Array(0, 5, 8, 9, 48);

for (let cont = 0; cont < lista.length; cont++) {
    console.log(lista[cont]);
}

// function listar(elemento){
//     console.log(elemento);
// }
// lista.forEach(listar);
//simplificando - arrow function:

lista.forEach((elemento)=>console.log(elemento));