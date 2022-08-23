const productsData = require('../models/productModel');

const getAll = async () => {
  const products = await productsData.getAll();
  
  return products;
};

module.exports = {
  getAll,
};