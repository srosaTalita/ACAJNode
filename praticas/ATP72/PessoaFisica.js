import { Pessoa } from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    #cpf;

    constructor(nome, cpf){
        super();
        super.nome = nome;
        this.#cpf = cpf;
    }

    get cpf(){
        return this.#cpf;
    }

    set cpf(cpf){
        this.#cpf = cpf;
    }
}