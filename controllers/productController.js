const productService = require('../services/productService');

const ERROR_404_NOT_FOUND = { message: 'Product not found' };
const ERROR_NAME_EMPTY = { message: '"name" is required' };
const ERROR_NAME_LENGTH = { message: '"name" length must be at least 5 characters long' };

const getAll = async (_req, res) => {
  const products = await productService.getAll();

  return res.status(200).json(products);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.getProductById(id);

  if (!product || product === '') return res.status(404).json(ERROR_404_NOT_FOUND);

  return res.status(200).json(product);
};

const createProduct = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(
      res.status(400).json(ERROR_NAME_EMPTY),
    );
  }
  if (name.length < 5) {
    return next(
      res.status(422).json(ERROR_NAME_LENGTH),
    );
  }

  const createdProduct = await productService.createProduct(name);

  return res.status(201).json(createdProduct);
};

const updateProductInfo = async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedInfo = await productService.updateProductInfo(name, id);
  
  if (!updatedInfo) {
    return res.status(404).json(ERROR_404_NOT_FOUND);
  }
  next();

  return res.status(200).json(updatedInfo);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const productDeleted = await productService.deleteProduct(id);
  if (!productDeleted || productDeleted === undefined) {
    return res.status(404).json(ERROR_404_NOT_FOUND);
  }

  return res.status(204).json();
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProductInfo,
  deleteProduct,
};
