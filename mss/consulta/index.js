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
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]["observacoes"];
        const indice = observacoes.findIndex((o) => o.id === observacao.id);
        observacoes[indice] = observacao;
    },         
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
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {} // uso [] para acessar alguem que existe dentro do objeto java script
    // () chama função 
    res.status(200).send(baseConsulta);
});


const port = 6000;
app.listen(port, async () => {
    console.log(`Consulta na porta ${port}.`);
    const resp = await axios.get("http://localhost:10000/eventos");
    resp.data.forEach((valor, indice, colecao) => {
        try {
            funcoes[valor.tipo](valor.dados); // ativa o mapa de funções desse arquivo
        } catch (err) {}
    });
});
// comunicação com o barramento de eventos
// se tipo for undefinido, vai para o catch err