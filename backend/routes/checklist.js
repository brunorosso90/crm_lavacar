// Defines the routes for checklist-related endpoints

const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklistController');

// List all checklists
router.get('/', checklistController.listar);

// Get checklist by ID
router.get('/:id', checklistController.buscarPorId);

// Create a new checklist
router.post('/', checklistController.criar);

// Update a checklist
router.put('/:id', checklistController.atualizar);

// Delete a checklist
router.delete('/:id', checklistController.deletar);

module.exports = router;