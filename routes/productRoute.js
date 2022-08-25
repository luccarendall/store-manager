const express = require('express');
const productController = require('../controllers/productController');
const { validateID, validateName } = require('../middlewares/updateProductValidations');
// const { validateName } = require('../middlewares/validations');
// expressjs.com/pt-br/guide/using-middleware.html
const productRoute = express.Router();

// Trazendo todos os produtos para a rota raiz
productRoute.get('/', productController.getAll);

// Buscando pelo ID (bit.ly/3CGljRp)
productRoute.get('/:id', productController.getProductById);

// Atualizando informação de algum produto
productRoute.put('/:id', validateID, validateName, productController.updateProductInfo);

// Criando um novo autor
productRoute.post('/', productController.createProduct);

// Deletando um produto
productRoute.delete('/:id', productController.deleteProduct);

module.exports = productRoute;
