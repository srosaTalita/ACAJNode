import ClienteRepository from '../repository/ClienteRepository.js'
import { Router } from 'express';
import Cliente from '../model/Cliente.js';

const ClienteApi = Router();
const repository = new ClienteRepository();

ClienteApi.get('/', async(req, resp)=>{
    const lista = repository.findAll();
    resp.send(lista);
});

ClienteApi.post('/', async(req, resp)=>{
    let {nome, sobrenome} = req.body;
    const cliente = new Cliente(nome, sobrenome)
    const r = await repository.create(cliente);
    resp.send(r);
});

ClienteApi.put('/:id', async(req, resp)=>{
    let id = req.params.id;
    let {nome, sobrenome} = req.body;
    const cliente = new Cliente(id, nome, sobrenome)
    const r = await repository.update(cliente);
    resp.send(r);
});

ClienteApi.delete('/:id', async(req, resp)=>{
    let id = req.params.id;
    const r = await repository.delete(id);
    resp.send(r);
});

export default ClienteApi;