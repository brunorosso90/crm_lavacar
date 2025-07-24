// Defines the routes for employee-related endpoints

const express = require('express');
const router = express.Router();
const funcionarioController = require('../controllers/funcionarioController');

router.post('/', funcionarioController.criarFuncionario);
router.get('/', funcionarioController.listarFuncionarios);

module.exports = router;

const funcionarioRoutes = require('./routes/funcionario');
app.use('/api/funcionarios', funcionarioRoutes);
