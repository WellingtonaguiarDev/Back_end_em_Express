// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const moradorRoutes = require('./routes/moradorRoutes');
const visitanteRoutes = require('./routes/visitanteRoutes');
const enderecoRoutes = require('./routes/enderecoRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const aluguelRoutes = require('./routes/aluguelRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/moradores', moradorRoutes);
app.use('/visitantes', visitanteRoutes);
app.use('/enderecos', enderecoRoutes);
app.use('/veiculos', veiculoRoutes);
app.use('/aluguelsalao', aluguelRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('API de Condomínios rodando!');
});

// Iniciar servidor (no Vercel, essa parte não é necessária, mas funciona localmente)
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // necessário para o Vercel funcionar