import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pf = new PessoaFisica("Michael Scott", "000.000.000-00");
console.log(pf.nome);
console.log(pf.cpf);

const pj = new PessoaJuridica("Dunder Mifflin", "00.000.000/0000-00");
console.log(pj.nome);
console.log(pj.cnpj);