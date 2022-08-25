const express = require('express');
const salesController = require('../controllers/salesController');
// const verifyProductID = require('../middlewares/verifyProductID');
// const verifyQuantitySales = require('../middlewares/verifyQuantitySales');

const salesRoute = express.Router();

salesRoute.get('/', salesController.getSalesAll);
salesRoute.get('/:id', salesController.getSalesById);

module.exports = salesRoute;