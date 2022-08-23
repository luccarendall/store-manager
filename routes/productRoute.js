const express = require('express');
const productController = require('../controllers/productController');

// expressjs.com/pt-br/guide/using-middleware.html
const productRoute = express.Router();

// Trazendo todos os produtos para a rota raiz
productRoute.get('/', productController.getAll);

module.exports = {
  productRoute,
};