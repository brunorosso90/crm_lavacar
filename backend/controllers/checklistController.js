// Handles business logic related to checklist operations

const Checklist = require('../models/checklist');

// List all checklists
exports.listar = async (req, res) => {
    try {
        const checklists = await Checklist.find().populate('cliente');
        res.status(200).json(checklists);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar checklists', error });
    }
};

// Get checklist by ID
exports.buscarPorId = async (req, res) => {
    try {
        const checklist = await Checklist.findById(req.params.id).populate('cliente');
        if (!checklist) {
            return res.status(404).json({ message: 'Checklist não encontrado' });
        }
        res.status(200).json(checklist);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar checklist', error });
    }
};

// Create a new checklist
exports.criar = async (req, res) => {
    try {
        const novoChecklist = new Checklist(req.body);
        const checklistSalvo = await novoChecklist.save();
        res.status(201).json(checklistSalvo);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar checklist', error });
    }
};

// Update a checklist
exports.atualizar = async (req, res) => {
    try {
        const checklistAtualizado = await Checklist.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!checklistAtualizado) {
            return res.status(404).json({ message: 'Checklist não encontrado' });
        }
        res.status(200).json(checklistAtualizado);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao atualizar checklist', error });
    }
};

// Delete a checklist
exports.deletar = async (req, res) => {
    try {
        const checklistRemovido = await Checklist.findByIdAndDelete(req.params.id);
        if (!checklistRemovido) {
            return res.status(404).json({ message: 'Checklist não encontrado' });
        }
        res.status(200).json({ message: 'Checklist removido com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover checklist', error });
    }
};
