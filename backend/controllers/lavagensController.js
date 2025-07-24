// Handles business logic related to wash records

const Lavagem = require('../models/Lavagem');

// Cria uma nova lavagem
exports.criarLavagem = async (req, res) => {
  try {
    const lavagem = new Lavagem(req.body);
    await lavagem.save();
    // Popula os campos de referência ao retornar
    const lavagemPopulada = await Lavagem.findById(lavagem._id)
      .populate('cliente')
      .populate('funcionario')
      .populate('checklist');
    res.status(201).json({ mensagem: 'Lavagem cadastrada com sucesso!', lavagem: lavagemPopulada });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar lavagem', erro });
  }
};

// Lista todas as lavagens
exports.listarLavagens = async (req, res) => {
  try {
    const lavagens = await Lavagem.find()
      .populate('cliente')
      .populate('checklist');
    res.status(200).json(lavagens);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao listar lavagens', erro });
  }
};
