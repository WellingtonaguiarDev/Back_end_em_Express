const Morador = require('../models/moradorModel');

async function listarMoradores(req, res) {
  try {
    const moradores = await Morador.getTodosMoradores();
    res.json(moradores);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao listar moradores' });
  }
}

async function buscarMorador(req, res) {
  try {
    const { id } = req.params;
    const morador = await Morador.getMoradorPorId(id);
    if (!morador) return res.status(404).json({ error: 'Morador não encontrado' });
    res.json(morador);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar morador' });
  }
}

async function criarMorador(req, res) {
  try {
    const { nome, telefone, id_endereco } = req.body;
    const novo = await Morador.criarMorador(nome, telefone, id_endereco);
    res.status(201).json(novo);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar morador' });
  }
}

async function atualizarMorador(req, res) {
  try {
    const { id } = req.params;
    const { nome, telefone, id_endereco } = req.body;
    const atualizado = await Morador.atualizarMorador(id, nome, telefone, id_endereco);
    res.json(atualizado);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar morador' });
  }
}

async function deletarMorador(req, res) {
  try {
    const { id } = req.params;
    await Morador.deletarMorador(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar morador' });
  }
}

module.exports = {
  listarMoradores,
  buscarMorador,
  criarMorador,
  atualizarMorador,
  deletarMorador
};
