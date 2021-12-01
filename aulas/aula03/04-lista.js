const lista = ["Luci", "Celina", "Linus"];
const lista2 = new Array("Luci", "Celina", "Linus");

console.log(lista);
console.log(lista2);

//adicionando elementos na lista
lista.push("Mina");
console.log(lista);

console.log(lista.length)
console.log(lista.indexOf("Luci"))
console.log(lista.pop());

const novaLista = lista.slice(0, 2);
console.log(novaLista);

lista.splice(1,1);
console.log(lista);