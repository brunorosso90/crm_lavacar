const Servico = require('../models/servicos');

// Criar novo serviço (personalizado ou padrão)
exports.criarServico = async (req, res) => {
  try {
    const { nome, descricao, preco, padrao } = req.body;
    const estabelecimentoId = req.params.estabelecimentoId;

    const novoServico = new Servico({
      nome,
      descricao,
      preco,
      padrao: padrao || false,
      estabelecimento: estabelecimentoId
    });

    await novoServico.save();
    res.status(201).json(novoServico);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao criar serviço', detalhes: err.message });
  }
};

// Listar todos os serviços de um estabelecimento
exports.listarServicos = async (req, res) => {
  try {
    const estabelecimentoId = req.params.estabelecimentoId;

    const servicos = await Servico.find({ estabelecimento: estabelecimentoId });
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços', detalhes: err.message });
  }
};

// Atualizar serviço
exports.atualizarServico = async (req, res) => {
  try {
    const servicoId = req.params.id;
    const dadosAtualizados = req.body;

    const servico = await Servico.findByIdAndUpdate(servicoId, dadosAtualizados, { new: true });
    if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });

    res.json(servico);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar serviço', detalhes: err.message });
  }
};

// Deletar serviço
exports.deletarServico = async (req, res) => {
  try {
    const servicoId = req.params.id;

    const servico = await Servico.findByIdAndDelete(servicoId);
    if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });

    res.json({ mensagem: 'Serviço removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao deletar serviço', detalhes: err.message });
  }
};

// Listar serviços padrão
exports.listarServicosPadrao = async (req, res) => {
  try {
    const servicosPadrao = await Servico.find({ padrao: true });
    res.json(servicosPadrao);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços padrão', detalhes: err.message });
  }
};

// Listar serviços personalizados
exports.listarServicosPersonalizados = async (req, res) => {
  try {
    const servicosPersonalizados = await Servico.find({ padrao: false });
    res.json(servicosPersonalizados);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços personalizados', detalhes: err.message });
  }
};

// Listar serviços por nome
exports.listarServicosPorNome = async (req, res) => {
  try {
    const { nome } = req.query;
    const servicos = await Servico.find({ nome: new RegExp(nome, 'i') });
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços por nome', detalhes: err.message });
  }
};

// Listar serviços por preço
exports.listarServicosPorPreco = async (req, res) => {
  try {
    const { precoMinimo, precoMaximo } = req.query;
    const servicos = await Servico.find({
      preco: { $gte: precoMinimo || 0, $lte: precoMaximo || Infinity }
    });
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços por preço', detalhes: err.message });
  }
};

// Listar serviços por descrição
exports.listarServicosPorDescricao = async (req, res) => {
  try {
    const { descricao } = req.query;
    const servicos = await Servico.find({ descricao: new RegExp(descricao, 'i') });
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar serviços por descrição', detalhes: err.message });
  }
};
