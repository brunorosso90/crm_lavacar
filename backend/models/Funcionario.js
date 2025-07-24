// Defines the schema for employees

const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cargo: {
    type: String,
    enum: ['Atendente', 'Lavador', 'Gerente', 'Caixa', 'Outro'],
    required: true
  },
  ativo: {
    type: Boolean,
    default: true
  },
  dataAdmissao: {
    type: Date,
    default: Date.now
  },
  telefone: String,
  observacoes: String
});

module.exports = mongoose.model('Funcionario', FuncionarioSchema);
