const productData = require('../models/productModel');

const getAll = async () => {
  const products = await productData.getAll();
  
  return products;
};

// bit.ly/3CGljRp
const getProductById = async (id) => {
  const [products] = await productData.getProductById(id);
  if (!products || products.length === 0) return null && console.log('array vazio');
  return products;
};

module.exports = {
  getAll,
  getProductById,
};
