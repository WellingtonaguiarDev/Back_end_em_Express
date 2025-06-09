const db = require('../db');

async function getTodosAlugueis() {
  const result = await db.query('SELECT * FROM alugueis');
  return result.rows;
}

async function criarAluguel(data, id_morador) {
  const result = await db.query(
    'INSERT INTO alugueis (data, id_morador) VALUES ($1, $2) RETURNING *',
    [data, id_morador]
  );
  return result.rows[0];
}

module.exports = { getTodosAlugueis, criarAluguel };
