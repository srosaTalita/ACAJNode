import { Produto } from "./Produto.js";
import { Categoria } from "./Categoria.js";

const p = new Produto();
p.nome = "Chocotone recheado";
p.valor = "22.0"
console.log(p);

const c = new Categoria();
c.nome = "Natal";
c.descricao = "Produtos natalinos";
console.log(c);
