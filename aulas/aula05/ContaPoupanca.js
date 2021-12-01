class ContaCorrente{
    numero;
    saldo;
    agencia;
    cliente;

    depositar(valor){
        this.saldo += valor;
    }

    saque(valor){
        if (this.saldo > valor) {
            this.saldo -= valor;
            return 'saque executado';
        }
        this.saldo += valor;
    }
}