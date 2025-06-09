const Aluguel = require('../models/aluguelModel');

module.exports = {
  listar: async (req, res) => {
    const alugueis = await Aluguel.getTodosAlugueis();
    res.json(alugueis);
  },

  criar: async (req, res) => {
    const { data, id_morador } = req.body;
    const novo = await Aluguel.criarAluguel(data, id_morador);
    res.status(201).json(novo);
  }
};
