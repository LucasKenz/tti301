const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
const axios = require('axios');
app.use(bodyParser.json());
const lembretes = {}; // esse é nosso objeto, ele é cosnt porque SEMPRE APONTA para esse objeto, mesmo que o objeto adicione mais linhas nele
let contador = 0;

// definição de endpoints
//GET no padrão /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})
// para criar novo lembrete
//POST /lembretes {texto: fazer café}
app.post('/lembretes', async (req, res) => {
    contador++;
    const {texto} = req.body // Recebe um body com as informações
    const lembrete = {
        contador, texto    
    };
    lembretes[contador] = lembrete;
   
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado", 
        dados: { 
            contador,
            texto
        }
    })
    res.status(201).send(lembretes[contador]); // retorna 201
}) // post cadastra

// tratamento do /eventos
// recebimento da notificação de inclusão na respectiva tabela
app.post("/eventos", (req, res) => {
    console.log(req.body);
    res.status(200).send({ msg: "ok" });
});
    
const port = 4000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})