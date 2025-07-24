// Defines the schema for a car wash record

const mongoose = require('mongoose');

const LavagemSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  tipo: {
    type: String,
    enum: ['Simples', 'Completa', 'Premium'],
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  },
  valor: {
    type: Number,
    required: true
  },
  observacoes: String,
  funcionario: { // Novo campo: referência ao funcionário responsável
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Funcionario',
    required: true
  }
});

module.exports = mongoose.model('Lavagem', LavagemSchema);

