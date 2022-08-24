const productService = require('../services/productService');

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);

  if (!product || product === '') return res.status(404).json({ message: 'Product not found' });

  return res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { productName } = req.body;
  const createdProduct = await productService.createProduct(productName);
 
  return res.status(201).json(createdProduct);
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
};
