const express = require('express');
const router = express.Router();
const controller = require('../controllers/moradorController');

router.get('/', controller.listarMoradores);
router.get('/:id', controller.buscarMorador);
router.post('/', controller.criarMorador);
router.put('/:id', controller.atualizarMorador);
router.delete('/:id', controller.deletarMorador);

module.exports = router;
