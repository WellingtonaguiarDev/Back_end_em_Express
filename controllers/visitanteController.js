const Visitante = require('../models/visitanteModel');

module.exports = {
  listar: async (req, res) => {
    const visitantes = await Visitante.getTodosVisitantes();
    res.json(visitantes);
  },

  criar: async (req, res) => {
    const { nome, documento } = req.body;
    const novo = await Visitante.criarVisitante(nome, documento);
    res.status(201).json(novo);
  }
};