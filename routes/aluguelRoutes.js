const express = require('express');
const router = express.Router();
const controller = require('../controllers/aluguelController');

router.get('/', controller.listar);
router.post('/', controller.criar);

module.exports = router;
