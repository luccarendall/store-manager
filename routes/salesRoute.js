const express = require('express');
const salesController = require('../controllers/salesController');

const salesRoute = express.Router();

salesRoute.get('/', salesController.getSalesAll);

module.exports = salesRoute;