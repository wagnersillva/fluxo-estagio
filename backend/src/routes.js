const express = require('express');
// const connection = require('./database/connections');
const routes = express.Router();
const {create, index, update, deleteUser} = require('./controllers/usersControllers')

routes.get('/users', (req, res) => {
  const rowQuery = req.query
  index(rowQuery).then(success => {
    return res.status(201).json(success);
  }).catch(() => {
    return res.status(400).json({messageError: "Erro inesperado ao tentar buscar usuário(s)."})
  })
})



routes.post('/createUsers', (req, res) => {
  const data = req.body;
  // console.log(data)
  create(data).then((success) => {
    return res.status(201).json(success);
  }).catch((e) => {
    return res.status(400).json({messageError: "Erro inesperado ao tentar criar usuário."})
  })
})

routes.put('/updateUsers', (req, res) => {
  const data = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    nomeFantasia: req.body.nomeFantasia,
    dataDeNascimento: req.body.dataDeNascimento,
    pessoa: req.body.pessoa,
    documento: req.body.documento,
    email: req.body.email,
    senha: req.body.senha,
    telefone: req.body.telefone,
    modulos: req.body.modulos,
    uf: req.body.uf,
    cidade: req.body.cidade,
    bairro: req.body.bairro,
    cep: req.body.cep,
    endereco: req.body.endereco,
    numero: req.body.numero,
  };
  const {id} = req.body;
  update(data, id).then((success) => {
    return res.status(201).json(success);
  }).catch((e) => {
    return res.status(400).json({messageError: "Erro inesperado ao tentar criar usuário."})
  })
})
routes.delete('/deleteUsers/:id', (req, res) => {
  const {id} = req.params;
  deleteUser(id).then((success) => {
    return res.status(201).json(success);
  }).catch((e) => {
    return res.status(400).json({messageError: "Erro inesperado ao tentar criar usuário."})
  })
})



module.exports = routes;