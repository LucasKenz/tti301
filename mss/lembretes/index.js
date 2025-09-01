const bodyParser = require('body-parser');
const express = require ('express');
const app = express();
app.use(bodyParser.json());
const lembretes = {}; // esse é nosso objeto, ele é cosnt porque SEMPRE APONTA para esse objeto, mesmo que o objeto adicione mais linhas nele
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
    const {texto} = req.body // extrai a propriedade texto do corpo da requisição
    lembretes[contador] = {
        contador, texto // constroi o objeto JSON puramente textual
        // cadastra esse objeto na base da forma descrita
    }
    res.status(201).send(lembretes[contador]); // retorna 201
}) // post cadastra
const port = 4000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})