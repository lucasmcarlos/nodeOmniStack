const express = require('express');

const routes = express.Router();

//req.query é para acessar o query params que vem da url 

routes.get("/", (req, res) => {
    return res.json({message: 'Olá Lucas', idade: req.query.idade, nome: req.query.nome});
});

routes.put("/user/:id", (req, res) => {
    return res.json({message: 'Olá Lucas', id: req.params.id});
});

routes.post('/cadastro', (req, res) => {
    return res.json({body:req.body,  message: "Cadastrado com sucesso"}); 
});

module.exports = routes;
