const Endereco = require('../models/enderecoModel');

module.exports = {
  listar: async (req, res) => {
    try {
      const enderecos = await Endereco.getTodosEnderecos();
      res.json(enderecos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar endereços' });
    }
  },

  buscar: async (req, res) => {
    const endereco = await Endereco.getEnderecoPorId(req.params.id);
    endereco ? res.json(endereco) : res.status(404).json({ error: 'Não encontrado' });
  },

  criar: async (req, res) => {
    const { rua, numero, cidade } = req.body;
    const novo = await Endereco.criarEndereco(rua, numero, cidade);
    res.status(201).json(novo);
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    const { rua, numero, cidade } = req.body;
    const atualizado = await Endereco.atualizarEndereco(id, rua, numero, cidade);
    res.json(atualizado);
  },

  deletar: async (req, res) => {
    await Endereco.deletarEndereco(req.params.id);
    res.status(204).send();
  }
};
