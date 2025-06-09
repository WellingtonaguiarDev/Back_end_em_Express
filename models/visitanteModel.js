const db = require('../db');

async function getTodosVisitantes() {
  const result = await db.query('SELECT * FROM visitantes');
  return result.rows;
}

async function criarVisitante(nome, documento) {
  const result = await db.query(
    'INSERT INTO visitantes (nome, documento) VALUES ($1, $2) RETURNING *',
    [nome, documento]
  );
  return result.rows[0];
}

module.exports = { getTodosVisitantes, criarVisitante };