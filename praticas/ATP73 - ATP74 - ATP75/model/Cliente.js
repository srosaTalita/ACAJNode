class Cliente{
    id;
    nome;
    sobrenome;

    constructor(id = null, nome, sobrenome){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export default Cliente;