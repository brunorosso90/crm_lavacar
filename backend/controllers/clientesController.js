// Controller functions to handle Cliente routes: listar, buscarPorId, criar, atualizar, deletar
const Cliente = require('../models/Cliente');
exports.listar = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar clientes', error });
    }
}
exports.buscarPorId = async (req, res) => {
    const { id } = req.params;
    try {
const cliente = await Cliente.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar cliente', error });
    }
}
exports.criar = async (req, res) => {
    const { name, email, phone, birthday, lastVisit } = req.body;
    try {
        const novoCliente = new Cliente({ name, email, phone, birthday, lastVisit });
        await novoCliente.save();
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar cliente', error });
    }
}
exports.atualizar = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, birthday, lastVisit } = req.body;
    try {
const clienteAtualizado = await Cliente.findByIdAndUpdate(id, { name, email, phone, birthday, lastVisit }, { new: true });
if (!clienteAtualizado) {
    return res.status(404).json({ message: 'Cliente não encontrado' });
}
res.status(200).json(clienteAtualizado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar cliente', error });
    }
}
exports.deletar = async (req, res) => {
    const { id } = req.params;
    try {
        const clienteDeletado = await Cliente.findByIdAndDelete(id);
        if (!clienteDeletado) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        res.status(200).json({ message: 'Cliente deletado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar cliente', error });
    }
}
const mongoose = require('mongoose');
// If you have mongoose.connect elsewhere in your codebase, 
// remove useNewUrlParser and useUnifiedTopology options from the connection options object.

// Use environment variable for MongoDB connection string
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
    console.error('MONGODB_URI environment variable not set.');
    process.exit(1);
}
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
