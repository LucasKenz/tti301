const express = require ('express');
const app = express();
app.use(express.json());
const lembretes = {};

// definição de endpoints
//GET no padrão /lembretes
app.get('/lembretes', (req, res) => {
    res.send('Lista de lembretes')
})
// para criar novo lembrete
//POST /lembretes {texto: fazer café}
app.post('/lembretes', (req, res) => {
    
})
const port = 4000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})