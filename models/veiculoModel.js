const db = require('../db');

async function getTodosVeiculos() {
  const result = await db.query('SELECT * FROM veiculos');
  return result.rows;
}

async function criarVeiculo(placa, modelo, id_morador) {
  const result = await db.query(
    'INSERT INTO veiculos (placa, modelo, id_morador) VALUES ($1, $2, $3) RETURNING *',
    [placa, modelo, id_morador]
  );
  return result.rows[0];
}

module.exports = { getTodosVeiculos, criarVeiculo };
