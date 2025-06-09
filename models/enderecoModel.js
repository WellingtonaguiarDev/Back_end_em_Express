const db = require('../db');

async function getTodosEnderecos() {
  const result = await db.query('SELECT * FROM enderecos');
  return result.rows;
}

async function getEnderecoPorId(id) {
  const result = await db.query('SELECT * FROM enderecos WHERE id = $1', [id]);
  return result.rows[0];
}

async function criarEndereco(rua, numero, cidade) {
  const result = await db.query(
    'INSERT INTO enderecos (rua, numero, cidade) VALUES ($1, $2, $3) RETURNING *',
    [rua, numero, cidade]
  );
  return result.rows[0];
}

async function atualizarEndereco(id, rua, numero, cidade) {
  const result = await db.query(
    'UPDATE enderecos SET rua = $1, numero = $2, cidade = $3 WHERE id = $4 RETURNING *',
    [rua, numero, cidade, id]
  );
  return result.rows[0];
}

async function deletarEndereco(id) {
  await db.query('DELETE FROM enderecos WHERE id = $1', [id]);
}

module.exports = {
  getTodosEnderecos,
  getEnderecoPorId,
  criarEndereco,
  atualizarEndereco,
  deletarEndereco
};
