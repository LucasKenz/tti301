const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
app.use(bodyParser.json());
const lembretes = {};
contador = 0;

// definição de endpoints
//GET no padrão /lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})
// para criar novo lembrete
//POST /lembretes {texto: fazer café}
app.post('/lembretes', (req, res) => {
    contador++;
    const {texto} = req.body;
    lembretes[contador] = {
        contador, texto
    }
    res.status(201).send(lembretes[contador]);
})
const port = 4000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})