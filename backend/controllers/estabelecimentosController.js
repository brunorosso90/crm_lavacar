const Servico = require('../models/Servico'); // importar o model

exports.criarEstabelecimento = async (req, res) => {
  try {
    const novoEstabelecimento = new Estabelecimento(req.body);
    const estabelecimentoSalvo = await novoEstabelecimento.save();

    // Serviços padrão
    const servicosPadrao = [
      { nome: 'Lavagem simples', preco: 30 },
      { nome: 'Lavagem completa', preco: 50 },
      { nome: 'Ducha', preco: 20 }
    ];

    // Vincula o estabelecimentoId aos serviços e salva
    const servicosComEstabelecimento = servicosPadrao.map(s => ({
      ...s,
      estabelecimentoId: estabelecimentoSalvo._id
    }));

    await Servico.insertMany(servicosComEstabelecimento);

    res.status(201).json(estabelecimentoSalvo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
