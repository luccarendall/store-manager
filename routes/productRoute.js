const express = require('express');
const productController = require('../controllers/productController');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

// expressjs.com/pt-br/guide/using-middleware.html
const productRoute = express.Router();

// Trazendo todos os produtos para a rota raiz
productRoute.get('/', productController.getAll);

// Buscando pelo ID (bit.ly/3CGljRp)
productRoute.get('/:id', productController.getProductById);

// Criando um novo autor
productRoute.post('/', productController.createProduct);

app.use(errorMiddleware);

module.exports = {
  productRoute,
};
