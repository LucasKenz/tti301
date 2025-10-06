const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json()); // middleware para ler JSON
const axios = require("axios");

const palavraChave = "importante";

const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave)?"importante":"comum";
        axios.post("http://localhost:10000/eventos", {
            tipo: "ObservacaoClassificada",
            dados: observacao,
        });
    },
};

app.post("/eventos", (req, res) => {
    try {
        funcoes[req.body.tipo](req.body.dados);
    } catch (err) {}
    res.status(200).send({ msg: "ok" });
});


app.listen(7000, () => console.log ("Classificação. Porta 7000"));

app.listen(6000, async () => {
    console.log("Consultas. Porta 6000");
    const resp = await axios.get("http://localhost:10000/eventos");
    resp.data.forEach((valor, indice, colecao) => {
        try {
            funcoes[valor.tipo](valor.dados); // ativa o mapa de funções desse arquivo
        } catch (err) {}
    });
});
// se resulta em uma função pelo tipo, obscraida, classificada, etc
// se der um erro eu descarto pelo catch err
// se achar eu pego os dados e passo para a função