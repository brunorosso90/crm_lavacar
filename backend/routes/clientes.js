// Defines API routes for operations related to clients
const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');
const Cliente = require('../models/Cliente');
