// Defines the schema for a checklist used in the car wash process

const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  data: { type: Date, default: Date.now },
  itens: [
    {
      descricao: { type: String, required: true },
      concluido: { type: Boolean, default: false }
    }
  ],
  observacoes: { type: String }
});

module.exports = mongoose.model('Checklist', checklistSchema);
