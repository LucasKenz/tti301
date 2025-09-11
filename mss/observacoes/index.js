const express = require ('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(bodyParser.json());

const observacoesPorLembreteId = {};

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes = observacoesPorLembreteId[observacao.lembreteId];
        const obsParaAtualizar = observacoes.find(o => o.id === observacao.id);
        obsParaAtualizar.status = observacao.status;
        axios.post('http://localhost:10000/eventos', {
            tipo: "ObservacaoAtualizada",
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        });
    }
};

//:id é um placeholder
//exemplo: /lembretes/123456/observacoes
app.post('/lembretes/:id/observacoes', async (req, res) => {
    // invés de Contador vamos usar um UUID
    const idObs = uuidv4();
    const { texto } = req.body;
//req.params dá acesso à lista de parâmetros da URL
    const observacoesDoLembrete =
        observacoesPorLembreteId[req.params.id] || []; // se existe ou se vamos criar um vazio novo
    observacoesDoLembrete.push({ id: idObs, texto, status: "agaurdando" });
    observacoesPorLembreteId[req.params.id] =
        observacoesDoLembrete;
    
    //implementando assincronismo em observações
    await axios.post("http://localhost:10000/eventos", {
        tipo: "ObservacaoCriada",
        dados: {
            id: idObs, texto, status:"aguardando", lembreteId: req.params.id
        }
    })
    res.status(201).send(observacoesDoLembrete);
});

// tratamento do /eventos
app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados);
      } catch (err) {}
      res.status(200).send({
        msg: "ok"
    });
});
    

app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || []);
});

app.listen(5000, (() => {
    console.log('Lembretes. Porta 5000');
}));
