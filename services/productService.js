const productsData = require('../models/productModel');

const getAll = async () => {
  const products = await productsData.getAll();
  
  return products;
};

// bit.ly/3CGljRp
const getProductById = async (ID) => {
  const [products] = await productsData.getById(ID);
  if (products.length === 0) return null && console.log('productsData vazio');
  return products;
};

module.exports = {
  getAll,
  getProductById,
};