// Defines the routes for wash record-related endpoints

const express = require('express');
const app = express();
const router = express.Router();
const lavagemsController = require('../controllers/lavagensController');

app.use(express.json());

router.post('/', lavagemsController.criarLavagem);
router.get('/', lavagemsController.listarLavagens);

app.use('/api/lavagens', router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
