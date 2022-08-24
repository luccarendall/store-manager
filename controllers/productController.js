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

const createProduct = async (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return next(
      res.status(400).json({ message: '"name" is required' }),
    );
  }
  if (name.length < 5) {
    return next(
      res.status(422).json({ message: '"name" length must be at least 5 characters long' }),
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
    return res.status(404).json({ message: 'Product not found' });
  }
  next();

  return res.status(200).json(updatedInfo);
};

module.exports = {
  getAll,
  getProductById,
  createProduct,
  updateProductInfo,
};
