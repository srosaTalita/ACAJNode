import Cliente from './model/Cliente.js'
import ClienteRepository from './repository/ClienteRepository.js'

console.log('============Banco===========')

const cliente = new Cliente();
cliente.id = 1
cliente.nome = 'Luci';
cliente.sobrenome = 'Rosa';
console.log(cliente.nome, cliente.sobrenome);

const repository = new ClienteRepository();
const lista = await repository.read();
console.log(lista);