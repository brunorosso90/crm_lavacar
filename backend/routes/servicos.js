const express = require('express');
const router = express.Router();
const servicosController = require('../controllers/servicosController');

// Criar novo serviço (personalizado ou padrão) para um estabelecimento
router.post('/:estabelecimentoId', servicosController.criarServico);

// Listar todos os serviços de um estabelecimento
router.get('/:estabelecimentoId', servicosController.listarServicos);

// Atualizar um serviço
router.put('/:id', servicosController.atualizarServico);

// Deletar um serviço
router.delete('/:id', servicosController.deletarServico);

module.exports = router;