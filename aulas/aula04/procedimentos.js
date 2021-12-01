function imprimirNome(){
    console.log("Nome");
}

function imprimirNomeEspecifico(nome){
    console.log("Nome: " + nome);
}

function imprimirNomeEspecificoComInterpolacao(nome){
    console.log(`Nome: ${nome}`);
}


function imprimirNomeSobrenome(nome, sobrenome){
    console.log(`Nome: ${nome} ${sobrenome}`);
}

imprimirNome();
imprimirNomeEspecifico("Luci");
imprimirNomeSobrenome("Luci", "Rosa");