const express = require ('express');
const app = express();
const axios = require('axios');
app.use(express.json());

// base de dados será uma lista que nasce vazia, sem eventos
const eventos = [];

app.post('/eventos', (req, res) => {
    const evento = req.body
    // vamos adicionar na lista de eventos esse evento que chegar
    eventos.push(evento)
    // enviar para o mss de lembretes
    axios.post('http://localhost:4000/eventos', evento)
    // enviar para o mss de observações
    axios.post('http://localhost:5000/eventos', evento)
    // enviar para o mss de consulta
    axios.post('http://localhost:6000/eventos', evento)
    axios.post('http://localhost:7000/eventos', evento)
    res.status(200).send({msg:'ok'})
});

//end point que devolve a lista de eventos perdidos
app.get('/eventos', (req, res) => {
    res.status(200).send(eventos)
})
// usamos o objeto app, com método get, que recebe dois parâmetros: o endpoint e uma função callback
// essa função callback recebe dois parâmetros: request e response
// request é o que chega, response é o que vai sair
// dentro da função callback, usamos o objeto response, com método send, que envia a resposta contendo o texto "ok"
// com os eventos, usamos o método send para enviar a lista de eventos armazenados


const port = 10000
app.listen(port, () => console.log(`Barramento. Porta ${port}.`))