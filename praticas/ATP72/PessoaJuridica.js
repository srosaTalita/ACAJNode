import { Pessoa } from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    #cnpj;

    constructor(nome, cnpj){
        super();
        super.nome = nome;
        this.#cnpj = cnpj;
    }

    get cnpj(){
        return this.#cnpj;
    }

    set cnpj(cnpj){
        this.#cnpj = cnpj;
    }
}