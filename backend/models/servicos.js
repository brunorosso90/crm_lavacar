const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicoSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String
  },
  preco: {
    type: Number,
    required: true
  },
  padrao: {
    type: Boolean,
    default: false
  },
  estabelecimento: {
    type: Schema.Types.ObjectId,
    ref: 'Estabelecimento', // supondo que você tenha um modelo de dono/empresa
    required: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Servico', ServicoSchema);
