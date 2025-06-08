const Veiculo = require('../models/veiculoModel');

module.exports = {
  listar: async (req, res) => {
    const veiculos = await Veiculo.getTodosVeiculos();
    res.json(veiculos);
  },

  criar: async (req, res) => {
    const { placa, modelo, id_morador } = req.body;
    const novo = await Veiculo.criarVeiculo(placa, modelo, id_morador);
    res.status(201).json(novo);
  }
};
