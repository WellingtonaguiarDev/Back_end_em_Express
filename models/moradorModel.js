const db = require('../db');

async function getTodosMoradores() {
  const result = await db.query('SELECT * FROM moradores');
  return result.rows;
}

async function getMoradorPorId(id) {
  const result = await db.query('SELECT * FROM moradores WHERE id = $1', [id]);
  return result.rows[0];
}

async function criarMorador(nome, telefone, id_endereco) {
  const result = await db.query(
    'INSERT INTO moradores (nome, telefone, id_endereco) VALUES ($1, $2, $3) RETURNING *',
    [nome, telefone, id_endereco]
  );
  return result.rows[0];
}

async function atualizarMorador(id, nome, telefone, id_endereco) {
  const result = await db.query(
    'UPDATE moradores SET nome = $1, telefone = $2, id_endereco = $3 WHERE id = $4 RETURNING *',
    [nome, telefone, id_endereco, id]
  );
  return result.rows[0];
}

async function deletarMorador(id) {
  await db.query('DELETE FROM moradores WHERE id = $1', [id]);
}

module.exports = {
  getTodosMoradores,
  getMoradorPorId,
  criarMorador,
  atualizarMorador,
  deletarMorador
};
