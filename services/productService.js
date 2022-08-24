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
const createProduct = async (name) => {
  const newProduct = await productData.createProduct(name);
  
  const createdProduct = {
    id: newProduct.insertId,
    name,
  };
  
  return createdProduct;
};

// https://bit.ly/3pJcqP0
const updateProductInfo = async (name, id) => {
  const productUpdated = await productData.updateProductInfo(name, id);
  // if (!productUpdated) return false;
  if (productUpdated.changedRows === 0) return false;
  const productObj = { id, name };
  return productObj;
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProductInfo,
};
