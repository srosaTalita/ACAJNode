export class Pessoa{
    #nome;

    get nome(){
        return this.#nome;
    }

    set nome(n){
        this.#nome = n;
    }
}