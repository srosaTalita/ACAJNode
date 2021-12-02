imporExpress
import Cliente from './model/Cliente.js'
import ClienteRepository from './repository/ClienteRepository.js'

const repository = new ClienteRepository();
const lista = await repository.read();
console.log(lista);