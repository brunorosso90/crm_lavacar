// Handles business logic related to employees

const Funcionario = require('../models/Funcionario');

exports.criarFuncionario = async (req, res) => {
  try {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();
    res.status(201).json({ mensagem: 'Funcionário cadastrado com sucesso!', funcionario });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar funcionário', erro });
  }
};

exports.listarFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.find();
    res.status(200).json(funcionarios);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar funcionários', erro });
  }
};
