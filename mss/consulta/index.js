const express = require('express');
const app = express();
app.use(express.json());

const baseConsulta = {}; // é um objeto delimitado por {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete;

    },
    ObservacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || [];
        observacoes.push(observacao);
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes;
    }
        
        
}

//GET /lembretes
//ativado pelo cliente, front end, deve devolver a base inteira consolidade
app.get('/lembretes', (req, res) => { // recebe a requisição e res permite responder ao cliente
    res.status(200).send(baseConsulta);
});

// POST /eventos {tipo, dados}
// vai se acionada pelo barramento de eventos, Serve para receber um evento e acessa a base para cadastra-lo para consulta futura
app.post('/eventos', (req, res) => {
    const { tipo, dados } = req.body;
    funcoes[req.body.tipo](req.body.dados); // uso [] para acessar alguem que existe dentro do objeto java script
    // () chama função 
    res.status(200).send(baseConsulta);
});


const port = 6000;
app.listen(port, () => console.log(`Consulta na porta ${port}.`));