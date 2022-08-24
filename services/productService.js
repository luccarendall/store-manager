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

// https://bit.ly/3TqPLF5
const createProduct = async (productName) => {
  const newProduct = await productData.createProduct(productName);
  
  const createdProduct = {
    id: newProduct.insertId,
    productName,
  };
  
  return createdProduct;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};
